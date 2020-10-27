# API Starter

## Getting started

  - Clone this repo
  - Set the name of the API in package.json `name` field
  - Create an .rc file matching the name of package.json `name` field
    with the following schema:

    ```
    {
      "api": {
        "port": 3000
      },
      "database": {
        "type": "postgres",
        "name": "api"
      }
    }
    ```

  - `npm install`
  - To start the API in dev mode: `npm run dev`
  - To build the API to the `/build` directory: `npm run build`
