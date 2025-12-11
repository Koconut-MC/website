clean:
	rm -rf dist

# build
build:
	rm -rf dist
	bun install --frozen-lockfile
	bun run build

# image
docker:
	docker build . -t koconut_mc_web
