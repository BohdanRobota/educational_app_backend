FROM node:16.14.0-alpine3.15 as dist
WORKDIR /tmp
COPY package*.json ./
COPY index.ts ./
COPY /src ./src
COPY tsconfig.json ./
RUN npm install
RUN npm run build


FROM node:16.14.0-alpine3.15 as node_modules
WORKDIR /tmp
COPY package*.json ./
RUN npm install --only=production


FROM node:16.14.0-alpine3.15
WORKDIR /usr/src/app
COPY --from=dist /tmp/dist ./dist
COPY ormconfig.docker.json ./ormconfig.json
COPY .env .
COPY --from=node_modules /tmp/node_modules ./node_modules
CMD ["node","dist/index.js"]