<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

Scalable [NestJS](https://github.com/nestjs/nest) Application
![Alt text](image.png)

## Installation

```bash
$ docker-compose build
```

## Running the app

```bash
# development
$ docker-compose up

```

## Running Each App

navivate to each app directory

```bash
# build
$ docker build ../../ -t sleepr_microServiceName -f ./Dockerfile

# without bash
$ docker run --env-file=.env sleepr_microServiceName

# with bash
$ docker run -it --env-file=.env sleepr_microServiceName /bin/bash
```

## Test

navigate to e2e directory

```bash
# tesing
$ docker-compose up e2e

# building
$ docker-compose up e2e --build

# get log of each service
$ docker container logs containerName
```

## Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/1566887-dd6ca9a1-7464-4a07-81b7-0bcbf6c80037?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D1566887-dd6ca9a1-7464-4a07-81b7-0bcbf6c80037%26entityType%3Dcollection%26workspaceId%3Df20b8551-2f10-4363-b926-f1d77d8643ff)
