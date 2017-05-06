FROM node:7.9-alpine

WORKDIR /var/www

ENV PORT=80

CMD ["node", "/var/www/dist/Server.js"]
