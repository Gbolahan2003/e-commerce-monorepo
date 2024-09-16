# ./apps/orders/Dockerfile

# Stage 1: Build
FROM node:18-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Run the development server
CMD ["npm", "run", "start:dev"]
