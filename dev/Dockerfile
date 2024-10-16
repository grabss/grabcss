FROM node:22.9.0-slim

RUN corepack enable yarn && \
    corepack prepare yarn@4.5.0 --activate

RUN mkdir /grabcss
WORKDIR /grabcss
