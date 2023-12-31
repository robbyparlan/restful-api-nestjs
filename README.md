# NestJS REST API boilerplate

[![NestJs][nestjs-shield]][ref-nestjs]
[![NodeJs][nodejs-shield]][ref-nodejs]
[![Typescript][typescript-shield]][ref-typescript]
[![PM2][pm2-shield]][ref-pm2]
[![PostgreSQL][postgresql-shield]][ref-postgresql]
[![JWT][jwt-shield]][ref-jwt]
[![Jest][jest-shield]][ref-jest]


## Description <!-- omit in toc -->

NestJS REST API boilerplate for your project ready for production

## Features

- [x] Database ([typeorm](https://www.npmjs.com/package/typeorm)).
- [x] Config Service ([@nestjs/config](https://www.npmjs.com/package/@nestjs/config)).
- [x] Logging in files with log4js ([log4js](https://log4js-node.github.io/log4js-node/)).
- [x] Swagger.
- [x] E2E and units tests.
- [x] Logger payload request and response in middleware.
- [x] Clustering with pm2 ([pm2](https://pm2.keymetrics.io/docs/usage/quick-start/)).
- [ ] JWT Token.
- [ ] RBAC (Role Base Access Control).

## Quick run

```bash
git clone --depth 1 https://github.com/robbyparlan/restful-api-nestjs.git my-app
cd my-app/
cp env-example .env
```

## Comfortable development

```bash
npm install

npm run start:dev
```

## Build for Production

```bash
cp pm2.json.example pm2.json

npm install

npm run build

pm2 start pm2.json
```

## Links

- Swagger: <http://localhost:3000/api/openapi>

## Tests

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e
```

## Contact

[Roby Parlan][author-email]

[![Github][github-shield]][author-github]
[![LinkedIn][linkedin-shield]][author-linkedin]

<!-- CONTACTS -->
[author-linkedin]: https://www.linkedin.com/in/roby-parlan-2a62a6162/
[author-email]: mailto:robbyparlan11@gmail.com
[author-github]: https://github.com/robbyparlan

<!-- BADGE LINKS -->
[ack-license-shield]: https://img.shields.io/github/license/andrechristikan/ack-nestjs-boilerplate?style=for-the-badge

[nestjs-shield]: https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white
[nodejs-shield]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[typescript-shield]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[postgresql-shield]: https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white
[jwt-shield]: https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white
[jest-shield]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[pm2-shield]: https://img.shields.io/badge/PM2-2B037A?style=for-the-badge&logo=PM2&logoColor=white

[github-shield]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
[linkedin-shield]: https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white

<!-- Reference -->
[ref-nestjs]: http://nestjs.com
[ref-postgresql]: https://www.postgresql.org/
[ref-nodejs]: https://nodejs.org/
[ref-typescript]: https://www.typescriptlang.org/
[ref-jwt]: https://jwt.io
[ref-jest]: https://jestjs.io/docs/getting-started
[ref-pm2]: https://pm2.keymetrics.io/docs/usage/quick-start/