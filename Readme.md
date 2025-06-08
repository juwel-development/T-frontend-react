# T-frontend-react

A React frontend template tailored for enterprise applications, designed to help teams build scalable, maintainable, and well-architected UI
projects.

---

## Key Features

- **Storybook integration**  
  Seamlessly collaborate between UX designers and developers with UX guidelines embedded in the documentation.

- **Atomic Design component structure**  
  Promote reusable and consistent UI building blocks.

- **Layered architecture**  
  Cleanly separate client-side business logic from UI code.

- **Command & Query Responsibility Segregation (CQRS)**  
  Clearly separate commands (actions) from queries (data fetching), improving code organization and maintainability.

- **RxJS-powered state management**  
  Enable a reactive programming style with data streams.

- **Fitness functions**  
  Enforce and validate adherence to architectural principles during development.

---

## Technology Stack

- React
- TypeScript
- RxJS
- tsyringe (dependency injection)
- Tailwind CSS
- class-variance-authority (utility for managing class names)
- i18n (internationalization)

---

## Architecture Overview

![Architecture](https://www.plantuml.com/plantuml/png/bPHHQ-D64CVVzrCCII5tK1zfuQ0SmLpgH6tWZhfNsfUc3sjfR0stsX6p8xjEs-_UNTcArxAFjBOHtfdVplmrsh_U1xMYNUECTOut3Vr9VcN2P_Aj5Tl0hGXl2lRw2pqXV7ETfLfRVhOhdDkgYdlWspnNEXl2sKoeRSMR55vQ5p3BEFAesnQ1HMisvYerjtw5KBFG4tkD4hVlO2uOC2wKs4FyELpgry1QeuIq5bhLQb8Kb7Shg4YmJ1kCiQMomAy1nPWKZ1qSmiNC4NgzW9kRPHI3qodyPI1-hk13gbIowne_Qlx1Rb7WbNAREYrObPlN_QwiyEcE2xWihekYk4ujzfz-OF0zimOLsqOPzrvbEsVoEfqEs31p-CITnXcUnEVnSXByILRMKsZCaCdapLWGBk-Jd2AJas-_LMxE9Zwomx9pXuR_cDrrF8BRjdLKZYPG5BUpkvC9t55ehPOroYZn6-7c8rVeHl6VEvJj5_hUSMCfQ_csU7itYot7DtA_Hg_depzQNpcKa-In5FAAihGbmiCdR3cGicn7GdzmlB2kB_hL5_G--ANOeDALsWaUT7yNlyKPtUDUkNYlfCzpYRyhUF1h2hI8ZR1QOG1bi8vM7hJ6lKq2LGXh5AKoUStiZnbCVh_SrAJunsIQFw73tvmu7bo-oAbSV1GtO-zt3WtmAb3JEbeILh1aIVCJqkrhaqmBaxZtu9Dtm2t6FMkoi13UHC8Sif4Th199ygHa7JrXUFIoTz2GJcXoJ-GSsof0bFpeAmgjizi0RKm5qmE972mLwPAzMl8X_cbQzkWruvAz8jC5J7d171fgl0WEFkl1vCO8zkc05V0IR0m5azVBdrA4g_q2S9tB-wzKRx48X6uHIg45FdfGpXoPTtwPFZesmt4vxJ_6Sl-SeVksvy2IVJhHU-vOId-5cydawCmEpw7QlJwQ7is1SstgFXK6EMCyVp54EjahW3o7HdmsbLQun10EbVD22Upl8OA2seaVgJOP_ERDtsCPoMVOz6N_HzKnktlNF1i7qv8m6FCUVTKrxby0)

---

## Atomic Design Structure

The `Presentation` directory follows Atomic Design principles, dividing components into:

- **Atoms**  
  Basic UI elements without business logic (e.g., buttons, inputs).

- **Molecules**  
  Simple groups of atoms functioning together.

- **Organisms** and **Pages**  
  Larger components and views that can subscribe to `ViewModels` or dispatch `Events` via the `Application` layer.

> **Note:**
> - `atoms` and `molecules` (in `Presentation/Core`) contain no business logic.
> - `organisms` and `pages` live in business-domain subdirectories, connect to the application layer, and handle domain interactions.

---

## Layered Architecture

1. **Presentation**  
   UI components following atomic design.

2. **Application**  
   Bridges UI and domain, prepares data for display.

3. **Domain**  
   Core business models, rules, and event handling.

4. **Infrastructure**  
   Technical concerns like API integration and data storage.

---

## Commands & Queries

### Commands

Inspired by Flux but using continuous event streams instead of a central store. Developers control UI updates (e.g., pause updates during
user input).

**Event Handler Example**

```typescript
import {
  EventHandler,
  type IEventHandler,
} from '@juwel-development/react-observable-tools';

@EventHandler("YOUR_EVENT_NAME")
class SomeEventHandler implements IEventHandler<YourEvent> {
  public handle(event: YourEvent): void {
    // Your business logic here
  }
}
```

### Queries

In CQRS, it's a common pattern to allow the application layer to retrieve data directly from the infrastructure layer. This project follows
that pattern.

Also, do not hesitate to use the Global Event Stream (`GlobalEvent$`) to build your view models based on application events.

### State Management

This template does **not** use common state management patterns found in React applications, such as Redux or Zustand. Instead, it uses the
approach of data streams.

Real-world example: Imagine you, as a human being, are an "observer" watching what happens in the world. Based on what you observe, you make
decisions and take actions. This is the same approach used in this template.

This approach makes the application independent of the backend technology used. It can work with a REST API, GraphQL, or any streaming API (
e.g., a CQRS backend or Google Firebase) by implementing your repositories accordingly.