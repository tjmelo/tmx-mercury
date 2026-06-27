FROM node:20-alpine

ARG TMX_PATH=tmx-mercury
ARG TMX_NAME="TMX Mercury"
ARG PROJECT_NAME=tmx-mercury
ARG PROJECT_VERSION=latest
ARG NODE_ENV=production
ARG PORT=3000

ENV TMX_PATH=${TMX_PATH} \
    TMX_NAME=${TMX_NAME} \
    PROJECT_NAME=${PROJECT_NAME} \
    PROJECT_VERSION=${PROJECT_VERSION} \
    NODE_ENV=${NODE_ENV} \
    PORT=${PORT}

LABEL name=${TMX_NAME}

LABEL version="v1.3.3"

LABEL description="It show a listed county for states in Brazil"

WORKDIR /${TMX_PATH}

COPY package*.json ./

RUN npm install --ignore-scripts

COPY . .

EXPOSE ${PORT}

CMD [ "yarn", "start" ]