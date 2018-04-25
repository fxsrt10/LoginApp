FROM node:latest

WORKDIR /usr/src/app
COPY . .
RUN npm install -g bower
WORKDIR /usr/src/app/public
RUN bower install --allow-root
WORKDIR /usr/src/app
RUN npm install
CMD ["node", "server"]