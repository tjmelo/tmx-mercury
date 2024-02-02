![project](https://img.shields.io/badge/project-TMX%20Mercury-blue)

# The county listed for states in Brazil

![Size](https://img.shields.io/github/repo-size/tjmelo/tmx-mercury) ![Version](https://img.shields.io/github/package-json/v/tjmelo/tmx-mercury) ![Release](https://img.shields.io/github/v/release/tjmelo/tmx-mercury) ![Last Commit](https://img.shields.io/github/last-commit/tjmelo/tmx-mercury/main)
![Passing](https://img.shields.io/github/actions/workflow/status/tjmelo/tmx-mercury/github-actions-demo.yml)

## Table of content

-   [About app](#about-app)
-   [Preview Screens](#preview-screens)
-   [Project details](#project-details)
    -   [Simple Develop Process](#simple-develop-process)
    -   [Docker develop Process](#docker-develop-process)

# About app

### The project proposal is to show a listed county for states in Brazil. It works like this:

-   There's a state list, where you can search for their specific state or clicking in a button card.
-   When you click on the card, it will be shown you a list of countries the state chose.

Online project: [https://tjmelo.github.io/tmx-mercury/](https://tjmelo.github.io/tmx-mercury/)

# Preview Screens

![Screen](/public/TMXMercury.png)

![Screen](/public/TMXMercury2screen.png)

# Project Details

Some principal project dependencies

![Lib](https://img.shields.io/github/package-json/dependency-version/tjmelo/tmx-mercury/bootstrap?color=blue)
![Lib](https://img.shields.io/github/package-json/dependency-version/tjmelo/tmx-mercury/sass?color=blue)
![Lib](https://img.shields.io/github/package-json/dependency-version/tjmelo/tmx-mercury/scrollreveal?color=blue)
![Lib](https://img.shields.io/github/package-json/dependency-version/tjmelo/tmx-mercury/axios?color=blue)
![Lib](https://img.shields.io/github/package-json/dependency-version/tjmelo/tmx-mercury/react?color=blue)
![Lib](https://img.shields.io/github/package-json/dependency-version/tjmelo/tmx-mercury/react-router-dom?color=blue)

## Simple Develop Process

Download the project

Clone or fork this repository

```sh
git clone https://github.com/tjmelo/tmx-mercury.git

cd tmx-mercury

git checkout -b develop

npm install && npm start
```

## Docker Develop Process

```sh
git clone https://github.com/tjmelo/tmx-mercury.git

cd tmx-mercury

docker compose up -d
```

Install from the command line

```
docker pull ghcr.io/tjmelo/tmx-mercury:latest
```

or image in **Docker Hub** for optional download

```
docker pull tmwd/tmx-mercury:v1
```

Open the app on a browser http://localhost:3000/tmx-mercury

---

Have a fun! :tada:
