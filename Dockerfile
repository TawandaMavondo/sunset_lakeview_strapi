FROM strapi/base

WORKDIR /.

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV production

ENV GENERATE_SOURCEMAP false

RUN yarn build --no-optimization

EXPOSE 1337
CMD ["yarn", "start"]