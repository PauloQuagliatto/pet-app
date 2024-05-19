FROM node:21.5.0-slim

RUN npm i -g pnpm@8.14.0

WORKDIR /home/node/app

USER node

CMD ["tail", "-f", "/dev/null"]
