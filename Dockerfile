FROM strapi/base

WORKDIR /.

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ENV NODE_ENV production

ENV GENERATE_SOURCEMAP false

RUN NODE_OPTIONS="--no-optimization" yarn build

EXPOSE 1337
CMD ["yarn", "start"]