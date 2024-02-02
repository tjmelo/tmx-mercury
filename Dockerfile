FROM node:20-alpine

ENV TMX_PATH tmx-mercury \
    TMX_NAME "TMX Mercury"

ENV NODE_ENV production

LABEL name=${TMX_NAME}

LABEL version="v1.3.3"

LABEL description="It show a listed county for states in Brazil"

WORKDIR /${TMX_PATH}

COPY package*.json ./

RUN npm ci --only=production --ignore-scripts

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]