FROM node:22.16.0-slim

RUN corepack enable && corepack prepare pnpm@10.12.1 --activate
RUN pnpm config set store-dir /tmp/pnpm/store

RUN mkdir /grabcss
WORKDIR /grabcss
