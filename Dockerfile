# build stage
FROM node:18-alpine as build  

WORKDIR /app  

COPY package*.json ./  

RUN npm install  

COPY . .  

RUN npm run build  

# production build stage
FROM node:18-alpine as production  

WORKDIR /app 
ENV NODE_ENV=production
ENV NODE_CONFIG_DIR=./dist/config

COPY --from=build /app/package*.json ./  

RUN npm install --omit=dev

COPY --from=build /app/dist ./dist  

CMD ["npm", "run", "start"] 

