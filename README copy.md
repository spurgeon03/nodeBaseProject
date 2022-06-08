## Dependencies

- express
- cors

## Dev Dependencies

### Node

- nodemon
- typescript
- @types/node
- rimraf

### Framework

- @types/express

### Test

- jest
- ts-jest
- @types/jest
- supertest
- @types/supertest

### Code style and Lint

- husky
- eslint
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- prettier
- eslint-config-prettier
- eslint-plugin-prettier

### help migrations

npm run typeorm -- -help

### init migrations

npm run typeorm:migrate init -- -d src/migrations

### run migrations pendings

npm run typeorm:run

### well practice when change or add field to table in database

npm run typeorm:migrate added_column_hola_to_users -- -d src/migrations
