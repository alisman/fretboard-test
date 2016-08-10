FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install --production

# Bundle app source
RUN mkdir -p /usr/src/app/public

COPY dist /usr/src/app/public

COPY server.js /usr/src/app

EXPOSE 8080
CMD [ "npm", "run", "serve" ]

## commands
## build image:   docker build -t aaronlisman/fretboard-tester .
## run image:   docker run -p 49160:8080 -d aaronlisman/fretboard-tester
