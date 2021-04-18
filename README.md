# SWAPI Challenge (para INDRA)
Prueba en AWS Lambda Node.js


## Stack

- Framework: [Serverless Framework](https://www.serverless.com/) con Node.js
- Base de datos: [DynamoDB](https://github.com/99x/serverless-dynamodb-local)
- Pruebas unitarias: [Jest](https://github.com/nordcloud/serverless-jest-plugin)
- Documentación: [OpenAPI](https://github.com/theodo/serverless-openapi)
- Linter: [Eslint (Standard)](https://eslint.org/)

## Características

- API para obtener especies por id
- API para obtener especies desde DynamoDB
- API para agregar una nueva especie desde DynamoDB
- Pruebas unitarias de las APIs
- Documentación de las APIs

## Dependencias

- Node >= 12
- Java Runtime Engine (JRE) version 6.x or newer (sudo apt install default-jdk or sudo apt install openjdk-11-jdk)

## Instalación

```sh
npm i
serverless dynamodb install
npm run dev
```

## Plugins

Plugins para Serverless

| Plugin | README |
| ------ | ------ |
| Offline | [https://github.com/dherault/serverless-offline#README.md][PlGh] |
| DynamoDB Local | [https://github.com/99x/serverless-dynamodb-local#README.md][PlDb] |
| Jest | [https://github.com/nordcloud/serverless-jest-plugin#README.md][PlGh] |
| OpenAPI | [https://github.com/theodo/serverless-openapi#README.md][PlGd] |


## Pruebas unitarias

```sh
npm run test
```

## Documentación

```sh
serverless openapi generate
```

## Despliegue

```sh
serverless deploy
```

## Endpoints:
| Plugin | README |
| ------ | ------ |
| GET | https://6emstx5io3.execute-api.us-east-1.amazonaws.com/dev/species/{id} |
| POST | https://6emstx5io3.execute-api.us-east-1.amazonaws.com/dev/species |
| GET | https://6emstx5io3.execute-api.us-east-1.amazonaws.com/dev/species/dynamodb/{id} |


## License

MIT

**Muchas gracias por ver este trabajo**
