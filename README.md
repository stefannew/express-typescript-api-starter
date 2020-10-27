# API Starter

## TODO:
  - [] Fix database config types (use typeorm type)
  - [] Interpolate the database version in the volume (docker-compose)?
  - [] Update the name of the repo (API Starter?)
  - [] Interpolate the name of the database image (postgres) (docker-compose) from .env?
  - [] Password, user, port, etc. from .env to database config
  - [] Export the config as a typed object instead of exposing getEnvironmentVariable and inject
  - [] Update readme to include docker-compose
  - [] Put the API in a docker container/Dockerfile
  - [] Use nodemon? ts-node? for dev only? with hot-reloading
  - [] Add support for quick heroku service creation/deployment? (Or just add to readme)

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
  - To start the API in dev mode: `npm run dev`
  - To build the API to the `/build` directory: `npm run build`
