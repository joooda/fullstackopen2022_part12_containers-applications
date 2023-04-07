FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm install

# idk, got this: EACCES: permission denied, mkdir '/usr/src/app/node_modules/.cache'
RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache

USER node
CMD ["npm", "start"]
