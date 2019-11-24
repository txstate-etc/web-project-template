FROM node:12-alpine as build

WORKDIR /usr/app

COPY package.json ./

RUN yarn install

COPY tsconfig.json ./
COPY src ./src

RUN tsc -p ./

FROM node:12-alpine

WORKDIR /usr/app

COPY --from=build package.json ./
COPY --from=build dist ./dist

RUN yarn install --production

ENTRYPOINT [ "yarn" ]
CMD [ "start" ]
