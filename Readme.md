# react-bootstrap

This is a starter template for react projects to bootrap a frontend application quickly.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Yarn](https://yarnpkg.com/en/) - Yarn is a package manager that doubles down as project manager.

### Installing

Install dependencies

```
yarn install
```

## Running the project

```
yarn start
```

## Running the tests

Coming soon

## Architecture

Most commonly react projects use the Flux architecture with Redux as the state management library. This project follows a different approach
and tries to bring the Clean Architecture to the frontend. Its goal is to separate the business logic from the UI and the infrastructure. In
the end it should not matter, if you use React, Angular or Vue as your UI framework. It also provides maximum flexibility for backend api to
use. You can use REST, GraphQL or even WebSockets, without changing the business logic and the presentation layer.

### Main concepts

- **CQRS** - Command Query Responsibility Segregation
    - This repository separates read and write operations. UI components can subscribe to a ressource stream and decide when to update.
    - User interactions get propagated as commands to the business logic. If a result of a command is an updated resource, the UI gets
      informed by their subscription to the ressource stream. Command are "fire and forget".
- **Observables everywhere**
    - The whole application is built around observables. Each layer of the application uses observables to communicate with each other, that
      makes it easy to implement the subscribe pattern in the UI.
- **Dependency Injection**
    - The business logic is completely decoupled from the infrastructure. The infrastructure is injected into the business logic. This makes
      it easy to test the business logic with mock infrastructure. For dependency injection this project
      uses [InversifyJS](http://inversify.io/).
- **Atomic Design**
    - The UI is built with the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology. I see this as a methodology
      to communicate with a design team and to exchange components and UI Framework quickly. For styling components we
      use [TailwindCSS](https://tailwindcss.com/).

### Layers

- **Presentation Layer**
    - The presentation layer is the UI. It is built with React, but this can be changed easily. The UI subscribes view models and updates
      itself when the view model changes. The UI also sends commands.
- **Application Layer**
    - The application layer prepares the data for the UI. It subscribes to the business logic and transforms the data into view models. It
      also sends commands to the business logic.
- **Domain Layer**
    - The domain layer contains the business logic. It is completely decoupled from the infrastructure. It subscribes to the infrastructure
      and sends commands to the infrastructure.
- **Infrastructure Layer**
    - The infrastructure layer communicates with the backend or other services. It is decoupled from the business logic. It
      subscribes to the backend and sends commands to the backend. Repositories are also a caching layer, so that the UI is only updated
      when some resources changed.

