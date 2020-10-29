# API Starter

## About

A simple API starter written in TypeScript, running on [Express](https://expressjs.com/). Database connections and
queries are managed using [TypeORM](https://typeorm.io/).

### Database

The default database is Postgres, though this can be configured on a use-by-use basis. The database "type" is defined in the .env file.
See [here](https://typeorm.io/#/connection-options/common-connection-options) for supported databases. Entities are defined in `core/entities`
and map to a database table.

### Services

Services are defined in `core/services` and are injected into the root API Router instantiated in `core/index.ts` 

### Modules

Each module defines a route or collection of routes and are imported into the core router defined in `core/router.ts`.

## Getting started

  - Clone this repo
  - Create an .env with the following schema:

    ```
    DATABASE_NAME=
    DATABASE_USER=
    DATABASE_PASSWORD=
    DATABASE_TYPE=
    DATABASE_PORT=
    PORT=
    ```

  - `npm install`
  - To start the PG database, run `docker-compose up`
  - To start the API in dev mode: `npm run dev`
  - To build the API to the `/build` directory: `npm run build`
