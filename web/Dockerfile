FROM oven/bun AS builder

WORKDIR /app

COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

FROM nginx:stable-alpine

COPY --from=builder /app/dist /usr/share/nginx/html

RUN echo 'server { \
	listen 8000; \
	location / { \
	root /usr/share/nginx/html; \
	index index.html; \
	try_files $uri $uri/ /index.html; \
	} \
	}' > /etc/nginx/conf.d/default.conf

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
