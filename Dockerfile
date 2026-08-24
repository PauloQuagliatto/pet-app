FROM oven/bun:1.3-slim

WORKDIR /home/node/app

USER node

CMD ["bun", "run", "dev", "--host", "0.0.0.0"]
