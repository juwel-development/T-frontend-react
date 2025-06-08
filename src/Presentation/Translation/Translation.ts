import { Logger } from '@juwel-development/beautiful-logger';
import { ApplicationEventDispatcher } from 'Application/Core/ApplicationEventDispatcher';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { container } from 'tsyringe';

import type { BackendModule } from 'i18next';

const LazyImportPlugin: BackendModule = {
  type: 'backend',
  init: (services, backendOptions, i18nextOptions) => {},
  read: (language, namespace, callback) => {
    import(`./${language}.ts`)
      .then((m) => m[language])
      .then((obj) => {
        callback(null, obj);
      });
  },

  save: (language, namespace, data) => {},

  create: (languages, namespace, key, fallbackValue) => {
    /* save the missing translation */
  },
};

export const Translation = {
  setupTranslation() {
    i18next
      .use(LazyImportPlugin)
      .use(initReactI18next)
      .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
          escapeValue: false,
        },
        saveMissing: true, // for missing key handler to fire
        missingKeyHandler: (lng, ns, key, fallbackValue) => {
          Logger.getLogger('Translation').warn(key);
        },
      })
      .then(() => {
        const dispatcher = container.resolve(ApplicationEventDispatcher);
        dispatcher.translationReady();
      });
  },
};
