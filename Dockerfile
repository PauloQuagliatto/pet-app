FROM node:21.5.0-slim

RUN npm i -g pnpm@9.1.4

WORKDIR /home/node/app

USER node

CMD ["tail", "-f", "/dev/null"]
