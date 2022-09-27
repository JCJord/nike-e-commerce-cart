FROM node:12.14.1-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install
# Bundle app source

COPY . .

EXPOSE 4200:4200

# Run container as non-root
CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck