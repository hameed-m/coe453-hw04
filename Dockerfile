FROM node
WORKDIR .
copy package*.json .
RUN npm install
COPY . .
CMD node server.js