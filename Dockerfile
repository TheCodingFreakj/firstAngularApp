
FROM node:12.22.10-alpine AS build
ARG ENV
RUN echo "Build number: $ENV"
# Create a Virtual directory inside the docker image
WORKDIR /dist/src/app
# Copy files to virtual directory
COPY package.json package-lock.json ./
# Run command in Virtual directory
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
COPY . .
RUN npm install
RUN if [  $ENV= sandbox ] ; then npm run build:sandbox ; else npm run build:prod ; fi



### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginx:latest AS ngi
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder 
COPY --from=build /dist/src/app/dist/first-angular-project /usr/share/nginx/html
# COPY /dist/src/app/nginx.conf  /etc/nginx/conf.d/default.conf
# Exposing a port, here it means that inside the container 
# the app will be using Port 80 while running
EXPOSE 4200:80 