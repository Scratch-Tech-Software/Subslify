# Subslify

_Subscription overload? Not anymore! With Subslify, you can easily track, organize, and understand your monthly subscriptions. No more surprise charges or hidden fees - Subslify has you covered. Try it now and take control of your subscription-based expenses!_

## Table of contents

- [Table of contents](#table-of-contents)
- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Scripts](#scripts)

## General info

```bash
\{^_^}/ hi!
```

Subslify is a subscription management app that helps users track and organize their monthly subscriptions. The app allows users to input their subscription information, including the cost, frequency, and expiration date, and displays the total monthly cost of all subscriptions in an easy-to-read format. Subslify also provides alerts for subscriptions that are about to expire or renew, and offers tools for canceling or modifying subscriptions as needed. The app is designed to be user-friendly and intuitive, making it easy for users to stay on top of their subscription-based expenses.

## Technologies

Project is created with:

<!--
TODO: add technologies
-->

- React
- webpack
- Node.js
- Express
- MongoDB

## Setup

<!--
TODO: add setup instructions
-->

To run this project, install it locally using npm:

```bash
> cd ./Subslify
> npm run install-deps
```

To start the client, run the following command:

```bash
> npm start
```

To start the server, run the following command, it will also start the docker container if it is not already running:

```bash
> npm run start-server
```

To run the docker container, run the following command:

```bash
 > npm run start-docker
```

To stop the docker container, run the following command:

```bash
 > npm run stop-docker
```

## Scripts

The following scripts are available:

```md
`install-deps`: Installs dependencies for both the client and server.
`install-client`: Installs dependencies for the client.
`install-server`: Installs dependencies for the server.
`build-client`: Builds the client.
`lint`: Lints the codebase.
`lint-fix`: Lints the codebase and attempts to fix any issues.
`check`: Checks the codebase for formatting issues.
`format`: Formats the codebase.
`test`: Runs tests.
`start-docker`: Starts Docker containers.
`stop-docker`: Stops Docker containers.
`start-server`: Starts the server.
`start-client`: Starts the client.
`start`: Starts the client.
```

[⬆ Back to top](#table-of-contents)
