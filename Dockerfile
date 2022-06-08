FROM node:13.8.0-alpine

WORKDIR /src
RUN cd /src && npm install
# RUN yarn add --dev typescript
COPY package.json .

COPY . /src/

EXPOSE 8889
CMD ["npm", "run", "dev"]
