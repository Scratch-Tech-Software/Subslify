# Subslify

_Subscription overload? Not anymore! With Subslify, you can easily track, organize, and understand your monthly subscriptions. No more surprise charges or hidden fees - Subslify has you covered. Try it now and take control of your subscription-based expenses!_

## Table of contents

- [Table of contents](#table-of-contents)
- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
  - [Environment Variables](#environment-variables)
  - [Starting the Project](#starting-the-project)

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

### Environment Variables

This project requires an `.env` file to function properly. A sample `.env.sample` file has been provided to show you the variables that need to be defined.

To use the `.env` file:

```markdown
1. Create a new file in the root of your project and name it `.env`.
2. Copy the contents of the `.env.sample` file into the `.env` file.
3. Replace the placeholder values in the `.env` file with the appropriate values for your environment.
4. Ensure that `.env` is not checked into version control.
```

### Starting the Project

To run this project, install it locally using npm:

```bash
> cd ./Subslify
> npm run install-dependencies
```

To start the server, run the following command:

```bash
> npm run start-server
```

To start the client, run the following command:

```bash
> npm start
```

To run the docker container, run the following command:

```bash
 > npm run start-docker
```

To stop the docker container, run the following command:

```bash
 > npm run stop-docker
```

[⬆ Back to top](#table-of-contents)
