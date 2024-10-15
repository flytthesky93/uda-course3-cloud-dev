FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app
# Copy package.json and ./prisma folder
COPY package*.json ./
COPY ./prisma prisma

# Install dependency
RUN npm install
RUN npx prisma generate

COPY . .
EXPOSE 8080
CMD [ "node", "./server.js" ]