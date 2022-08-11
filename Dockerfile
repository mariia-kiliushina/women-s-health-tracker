FROM node:16.15.0

WORKDIR /var/app

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
RUN npm install

COPY . .



EXPOSE 8080

CMD ["npm", "run", "start"]