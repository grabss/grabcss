FROM node:22.13.1-slim

RUN corepack enable && corepack prepare pnpm@9.15.4 --activate
RUN pnpm config set store-dir /tmp/pnpm/store

RUN mkdir /grabcss
WORKDIR /grabcss
