# koconutmc.com Website

<img alt="logo" src="public/koconutmc_logo.webp" align="right" width="128px" height="128px">

This project is the front-end source code for the Koconut MC modpack and Koconut SMP.
[![Dependabot Updates](https://github.com/Koconut-MC/website/actions/workflows/dependabot/dependabot-updates/badge.svg)](https://github.com/Koconut-MC/website/actions/workflows/dependabot/dependabot-updates)
[![CI](https://github.com/Koconut-MC/website/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/Koconut-MC/website/actions/workflows/build.yml)
<br></br>
<br></br>

## Development

Prerequisite: a node package manager such as [npm](https://www.npmjs.com/)

```sh
cd website
npm install
```

### For development:

```sh
npm run dev
```

### For production testing:

```sh
npm run build
npm run preview # start a web server for TESTING purposes
```

### Adding images to the gallery:

The project recommends converting lossless to lossy webp images with a quality preset of 90% for the images gallery (`/public/gallery`).

```sh
ffmpeg -i input.png -q:v 90 compressed_output.webp
```

The image naming format is `<title>_<author>.webp`.

## Deployment

### This is the recommended way for production use.

Prerequisites: docker and docker-compose

A [docker-compose.yml](docker-compose.yml) is provided by the project for easy deployment. The compose stack uses [crafatar](https://github.com/crafatar/crafatar) API to retrieve player avatar images, the API also requires [redis](https://redis.io/).

The web map uses [Bluemap](https://github.com/BlueMap-Minecraft/Bluemap) which is also included in the compose stack, it is highly recommended to consult [BlueMap's documentation](https://bluemap.bluecolored.de/wiki/getting-started/Installation.html#using-bluemap-docker-image) for configuring a Minecraft world to use and its modpack resources before deploying.

### Deploying the compose manually:

```sh
cd website
mkdir modpack # the volume that holds large sized modpack files for downloading off the web
docker compose up -d # before deploying the compose stack, it is recommended to read the compose first
```

#### License

<sup>
Licensed under <a href="LICENSE">LGPL-3.0 License</a>.
</sup>
