You can find a demo [here](https://react-spin-and-win-game.vercel.app/).

## Getting Started

In order to start the development server:

```bash
npm install
npm run dev
```

**Alternately, you can also use `docker-compose up` to start the containerized
application.**

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Project structure

A brief overview of the project file structure and what each directory contains

```ascii
├───components => react UI  components
├───lib => helper functions
├───middleware => database connection manager
├───pages => main pages to be rendered (excluding _app.js)
│   └───api => server side API
├───public => project assets (images, etc) - publicly accessible
│   └───images
├───store => state management
└───styles => application styles
    ├───bootstrap
    └───components
```

## Overview

-   This is a [Next.js](https://nextjs.org/) project bootstrapped with
    [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
-   It contains both client side code for the application, and the server side
    endpoints to update the game.
-   A free mongodb client provided by
    [MongoAtlas](https://www.mongodb.com/cloud/atlas) is used to save the game
    state.
-   The application is hosted on [Vercel](https://vercel.com/)

## How it works?

1. On first load, the server generates a game instance
2. The application is then initialized on the client
3. The application state is managed on the frontend using the `useContext` and
   `useReducer` react hooks
4. When the user clicks on spin the wheel, a request is made to the API to
   determine the outcome
5. When the server responds, the wheel spins to the server determined location
6. When the animation ends, the application is updated to match the server
   determined outcome
7. The user is notified of the outcome
