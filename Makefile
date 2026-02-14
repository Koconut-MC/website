clean:
	rm -rf web/dist

web:
	rm -rf web/dist
	cd web && bun install --frozen-lockfile
	cd web && bun run build

bot:
	bun run bot/src/index.mjs

web-docker:
	docker build ./web/ -t koconut-web

bot-docker:
	docker build . -f bot -t koconut-bot

docker: web-docker bot-docker
