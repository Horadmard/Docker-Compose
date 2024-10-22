FROM node:20-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# ENTRYPOINT [ "npm", "run", "dev" ]
# CMD [ "npm", "run", "dev" ]

RUN npm run build

FROM nginx:1.27.2-alpine

# Delete the default welcome to nginx page.
# RUN rm /usr/share/nginx/html/*

# COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/.next /usr/share/nginx/html/_next
COPY --from=build /app/.next/server/app /usr/share/nginx/html/
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/nginx/localhost.crt /etc/ssl/certs/
COPY --from=build /app/nginx/localhost.key /etc/ssl/private/

# # Expose port 80 for the Nginx server
EXPOSE 80
EXPOSE 443

# # Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]

