# T-frontend-react

This is a template for react frontend projects for enterprise applications. It offers:

- storybook setup as interface between UX designers and developers by adding UX guidelines to the documentation
- a component structure that is based on atomic design principles
- a layered architecture that excludee client side business logic from the ui code
- a separation of commands and queries to allow for a better separation of concerns
- state management with RxJS to allow for a reactive programming style
- fitness functions to ensure that the application is built according to the architecture

## Technology Stack

- React
- TypeScript
- RxJS
- tsyringe
- tailwindcss
- class-variance-authority
- i18n

## Architecture

![Architecture](https://www.plantuml.com/plantuml/png/bPHHQ-D64CVVzrCCII5tK1zfuQ0SmLpgH6tWZhfNsfUc3sjfR0stsX6p8xjEs-_UNTcArxAFjBOHtfdVplmrsh_U1xMYNUECTOut3Vr9VcN2P_Aj5Tl0hGXl2lRw2pqXV7ETfLfRVhOhdDkgYdlWspnNEXl2sKoeRSMR55vQ5p3BEFAesnQ1HMisvYerjtw5KBFG4tkD4hVlO2uOC2wKs4FyELpgry1QeuIq5bhLQb8Kb7Shg4YmJ1kCiQMomAy1nPWKZ1qSmiNC4NgzW9kRPHI3qodyPI1-hk13gbIowne_Qlx1Rb7WbNAREYrObPlN_QwiyEcE2xWihekYk4ujzfz-OF0zimOLsqOPzrvbEsVoEfqEs31p-CITnXcUnEVnSXByILRMKsZCaCdapLWGBk-Jd2AJas-_LMxE9Zwomx9pXuR_cDrrF8BRjdLKZYPG5BUpkvC9t55ehPOroYZn6-7c8rVeHl6VEvJj5_hUSMCfQ_csU7itYot7DtA_Hg_depzQNpcKa-In5FAAihGbmiCdR3cGicn7GdzmlB2kB_hL5_G--ANOeDALsWaUT7yNlyKPtUDUkNYlfCzpYRyhUF1h2hI8ZR1QOG1bi8vM7hJ6lKq2LGXh5AKoUStiZnbCVh_SrAJunsIQFw73tvmu7bo-oAbSV1GtO-zt3WtmAb3JEbeILh1aIVCJqkrhaqmBaxZtu9Dtm2t6FMkoi13UHC8Sif4Th199ygHa7JrXUFIoTz2GJcXoJ-GSsof0bFpeAmgjizi0RKm5qmE972mLwPAzMl8X_cbQzkWruvAz8jC5J7d171fgl0WEFkl1vCO8zkc05V0IR0m5azVBdrA4g_q2S9tB-wzKRx48X6uHIg45FdfGpXoPTtwPFZesmt4vxJ_6Sl-SeVksvy2IVJhHU-vOId-5cydawCmEpw7QlJwQ7is1SstgFXK6EMCyVp54EjahW3o7HdmsbLQun10EbVD22Upl8OA2seaVgJOP_ERDtsCPoMVOz6N_HzKnktlNF1i7qv8m6FCUVTKrxby0)

### Atomic Design

Within the `Presentation` directory you find components like `atoms`, `molecules`, `organisms`, and `pages` that follow the atomic design
principles.

Components are seperated by their purpose in the business domain. Inside `Presentation/Core` a component is not allowed to have any business
logic or connection to it - this is where you find `atoms` and `molecules`.

`Organisms` and `pages` can subscribe to `ViewModels` or dispatch `Events` via the `Application` layer. This is why you find them in the
`Core` directory and they have their business domain as subdirectory.

### Layered Architecture

The architecture has the following layers:

- **Presentation**: Contains the UI components, organized by atomic design principles.
- **Application**: Connects UI with the domain logic and prepares data for the UI.
- **Domain**: Contains the domain models and business rules and events.
- **Infrastructure**: Contains the technical details, such as API calls and data storage.

### Separation of Commands and Queries

#### Commands

This project follows and extends the principles of a Flux architecture, with the difference that data is not stored in a central store.
All data is seen as a continues stream of information on which the UI can subscribe to. This results in UI updates can be controlled by the
developer (for example delayed, while a user is editing).

- The emitted events are handled by the `Domain` layer. An event handler can subscribe to any event by implementing the following pattern:

```typescript
import {
  EventHandler,
  type IEventHandler,
} from '@juwel-development/react-observable-tools';

@EventHandler("YOUR_EVENT_NAME")
class SomeEventHandler implements IEventHandler<YourEvent> {
  public handle(event: YourEvent): void {
    // Your buisiness logic here
  }
}

```

#### Queries

In CQRS it's a common pattern to allow the application layer to retrieve data directly from the infrastructure layer. This project follows
this pattern. Also, do not hesitate to use the Global-Event-Stream (`GlobalEvent$`) to build your view models based on application events.

### State Management

This template is not using common state management pattern that are used in React applications, like Redux or zustand. Instead, this
template
uses the approach of date steams.

Real world example: Assume you, as a human being, are an 'observer' that is observing what is happening in the world. Based on what you
observe, you make decisions and take actions. This is the same approach that this template is using. This approach makes it independent of
the backend technology used. It can deal with a REST API, GraphQL, or any streaming API (e.g. a CQRS backend, or Google Firebase), by
implementing your Repositories accordingly.



