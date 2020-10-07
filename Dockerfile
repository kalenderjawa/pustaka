#https://hub.docker.com/_/node?tab=tags&page=1&name=12.16
FROM node:12.16.3-stretch-slim

# copy cjs library version to app dir
COPY ./lib/kalenderjawa.min.cjs /app/kalenderjawa.min.cjs
# copy test file index.js to app dir
COPY ./examples/index.js /app/index.js

WORKDIR /app
# run 
RUN node index.js
