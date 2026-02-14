FROM oven/bun

WORKDIR /app
COPY . .
RUN bun install --frozen-lockfile

EXPOSE 3000

CMD ["bun", "run", "src/index.mts"]
