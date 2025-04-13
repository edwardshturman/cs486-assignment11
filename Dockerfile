FROM oven/bun:1.2.4

RUN apt-get update && apt-get install -y curl

WORKDIR /app/
COPY package.json ./
COPY bun.lock ./
RUN bun install

COPY . ./

EXPOSE 8081
CMD [ "bun", "run", "serve" ]
