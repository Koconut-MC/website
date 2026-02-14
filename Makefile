clean:
	rm -rf web/dist

web:
	rm -rf web/dist
	cd web && bun install --frozen-lockfile
	cd web && bun run build

express:
	bun run express/src/index.mjs

web-docker:
	docker build web/ -t koconut-web

express-docker:
	docker build express/ -t koconut-express

docker: web-docker express-docker
