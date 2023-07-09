FROM node:alpine AS development

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN npm install -g yarn
RUN yarn 

COPY . .

RUN yarn run build


FROM node:alpine AS production

ARG NODE_ENV=production

ENV NODE_ENV={NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN npm install -g yarn
RUN yarn --prod

COPY --from=development /usr/src/app/dist ./dist

CMD [ "node", "dist/apps/reservations/main" ]