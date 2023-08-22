FROM node:lts-alpine

EXPOSE 3000

ARG NEXT_PUBLIC_ENV
ENV NEXT_PUBLIC_ENV=${NEXT_PUBLIC_ENV}

WORKDIR /app/admin

COPY package* yarn.lock .pnp*     ./
COPY .yarnrc.yml                  ./
COPY .yarn                        ./.yarn
COPY ./ ./

RUN yarn set version berry 

RUN yarn install
RUN yarn add sharp

RUN yarn build:production

ENTRYPOINT [ "yarn", "start" ]