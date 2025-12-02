FROM oven/bun AS builder

WORKDIR /build

COPY package.json bun.lock astro.config.mjs svelte.config.js ./
COPY public ./public
COPY src ./src

RUN bun install && bun run build

FROM joseluisq/static-web-server:debian AS runtime

WORKDIR /data

COPY --from=builder /build/dist ./dist

EXPOSE 80/tcp

ENTRYPOINT [ "sh", "-c", "/entrypoint.sh -p 80 -d /data/dist -g trace" ]