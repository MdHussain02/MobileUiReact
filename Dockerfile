FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose the port dynamically from the environment
EXPOSE ${PORT}

CMD ["npm", "start"]
