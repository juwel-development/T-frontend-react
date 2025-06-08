import type { en } from 'Presentation/Translation/en';
import { useTranslation as useI18n } from 'react-i18next';

type PathImpl<T, K extends keyof T> = K extends string
  ? T[K] extends Record<string, unknown>
    ? T[K] extends Array<unknown>
      ? K
      : `${K}` | `${K}.${PathImpl<T[K], keyof T[K]>}`
    : K
  : never;

type Path<T> = PathImpl<T, keyof T>;

export const useTranslation = () => {
  const { t } = useI18n();

  return { translate: (key: Path<typeof en>) => t(key) };
};
