# Introduction

Reproduction for https://github.com/prisma/prisma/issues/2329

## Steps to reproduce

1. Clone this repo and install the deps using `yarn`
2. Goto `prisma/.env` and change the credentails there
3. Run `npx @prisma/cli@alpha migrate save --experimental && npx @prisma/cli@alpha migrate up --experimental`
4. Run `npx @prisma/cli@alpha studio --experimental` and insert two users with id `1` and `2` and also add a friend request between them from id `1` and `2`
5. Run `npx @prisma/cli@alpha generate`
6. Run `npm run start` to reproduce
