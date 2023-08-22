FROM node:alpine

EXPOSE 3000

## Note. Yarn berry
# 1. Node 16.14+
# 2. yarn install --immutable for zero-install
# 3. Deploying Docker, need following commands
# - COPY package* yarn.lock .pnp*     ./
# - COPY .yarnrc.yml                  ./
# - COPY .yarn                        ./.yarn

ARG NEXT_PUBLIC_ENV
ENV NEXT_PUBLIC_ENV=${NEXT_PUBLIC_ENV}

WORKDIR /app/admin

RUN  npm install pm2 -g


# COPY ./package*.json ./
# RUN  npm install

# COPY ./ ./

COPY package* yarn.lock .pnp*     ./
COPY .yarnrc.yml                  ./
COPY .yarn                        ./.yarn
COPY ./ ./

RUN yarn install --immutable

RUN echo "Based on env: $NEXT_PUBLIC_ENV"

RUN yarn run build:${NEXT_PUBLIC_ENV}

ENTRYPOINT pm2 list && NEXT_PUBLIC_ENV=${NEXT_PUBLIC_ENV} pm2-runtime start pm2.config.js