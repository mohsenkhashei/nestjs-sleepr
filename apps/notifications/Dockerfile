FROM node:lts AS development

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
COPY tsconfig.json tsconfig.json
COPY nest-cli.json nest-cli.json

RUN yarn install 

COPY apps/notifications apps/notifications
COPY libs libs

RUN cd apps/notifications && yarn install

RUN yarn run build notifications


FROM node:lts AS production

ARG NODE_ENV=production

ENV NODE_ENV={NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD [ "node", "dist/apps/notifications/main" ]