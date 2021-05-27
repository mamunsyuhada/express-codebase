FROM node:14

WORKDIR /usr/src/app

COPY . .
RUN npm i

CMD [ "npm", "run", "start" ]