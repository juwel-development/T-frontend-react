import 'Domain/Core/EventHandler/LogAllEventHandler';
import 'Domain/Core/EventHandler/ToggleThemeEventHandler';
import { CoreToken } from 'Domain/Core/CoreToken';
import { ThemeRepository } from 'Infrastructure/core/repository/ThemeRepository';
import { container } from 'tsyringe';

container.registerSingleton(CoreToken.ThemeRepository, ThemeRepository);
