FROM node:alpine3.17 as build

RUN mkdir -p /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app/

RUN npm run build --prod

FROM nginx:alpine

COPY --from=build /app/dist/earysystem /usr/share/nginx/html


#docker build --tag assemgamal7/earysystem .

#docker image ls

#docker run -d -p 4200:80 --name earysystem  assemgamal7/earysystem
