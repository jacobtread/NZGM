
<img src="https://raw.githubusercontent.com/jacobtread/NZGM/main/src/assets/img/logo-white.svg" alt="NZGM" width="100%" height="100"/>

# NZGM


[![GitHub Pages](https://github.com/jacobtread/NZGM/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/jacobtread/NZGM/actions/workflows/ph-pages.yml)
![VueJS](https://img.shields.io/badge/Powered%20By-VueJS-68A063?style=for-the-badge)
![LINES OF CODE](https://img.shields.io/tokei/lines/github/jacobtread/NZGM?style=for-the-badge)
![LICENSE](https://img.shields.io/github/license/jacobtread/NZGM?style=for-the-badge)

The mordern alternative to [NZGrapher](https://github.com/mathsnz/NZGrapher/) with many improvements in performance and runs completely serverless with live edit for the data, settings, title and axies. All packed into a new and modern looking UI design. 

THIS APPLICATION IS WIP AND DOES NOT FEATURE EVERYTHING INCLUDED IN NZGrapher

This application is written in Typescript, SCSS, and HTML and uses VueJS

There is a live version of this application [Here](https://jacobtread.github.io/NZGM/)

This application does not yet support smaller screen sizes and requires JavaScript enabled to run.

## Deploying

### Web Server

This application can be served from any webserver that is able to serve static files (I would hope all of them)

Using a prebuilt version from the releases [Here](https://github.com/jacobtread/NZGM/releases/) you can simply extract the zip file and copy everything into the public directory of your webserver and you're good to go!

Otherwise if you would like to build the site yourself you will need to have [NodeJS](https://nodejs.org/en/) installed (tested using v14.18.0) and then you can clone this repository and run 

```
npm install
npm run build
```

or if you are using the yarn package manager

```
yarn install
yarn build
```

### Docker

You can quickly and easily deploy this application to docker using its provided Dockerimage

### CapRover

This project includes a captain-definition file so that it can be easly set up and used with CapRover [See Here](https://caprover.com/docs/captain-definition-file.html)


## Developement

To run a hot-reloading version of this project for development purposes you can use
the following command

```
npm run serve
```

or with yarn package manager

```
yarn serve
```