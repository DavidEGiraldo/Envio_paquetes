FROM node:lts-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
COPY package.json .
ENV NODE_ENV production
EXPOSE 3000
CMD ["npx", "serve",  "build"]