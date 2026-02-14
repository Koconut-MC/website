clean:
	rm -rf web/dist

web:
	rm -rf web/dist
	cd web && npm install
	cd web && npm run build

express:
	npm run express/src/index.mjs

web-docker:
	docker build web/ -t koconut-web

express-docker:
	docker build express/ -t koconut-express

docker: web-docker express-docker
