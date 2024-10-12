FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

# Use Nginx as the production server
# FROM nginx:1.27.2-alpine

# # Copy the built React app to Nginx's web server directory
# COPY --from=build /app/build /usr/share/nginx/html

# # Expose port 80 for the Nginx server
# EXPOSE 80

# # Start Nginx when the container runs
# CMD ["nginx", "-g", "daemon off;"]

CMD [ "npm", "run", "start:dev" ]
