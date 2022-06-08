FROM strapi/base

WORKDIR /.

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV production

RUN yarn build

EXPOSE 1337
COPY ./config ./app/config
CMD ["yarn", "start"]