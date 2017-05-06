TypeSctipt Start
===

# Requirements
* docker
* docker-compose

# Dependecies
* TypeScript
* Node.js
* Express

# Usage
```
$ git clone git@github.com:rog-works/ts-start.git
$ cd ts-start
$ docker-compose build
$ docker run --rm -v `pwd`:/var/www ts:latest yarn install --no-bin-links
$ docker run --rm -v `pwd`:/var/www ts:latest node_modules/typescript/bin/tsc
$ docker-compose up -d
```