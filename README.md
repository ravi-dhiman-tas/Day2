# Day2
My 100DaysOfCode challenge, now for angular 2.0.

# Angular 2 Starter

This file contains code snippets to be used while following the [Angular 2 with Webpack Project Setup](https://www.youtube.com/playlist?list=PLgGUMhSgtxJyIQ4vI3BzlCzZLHL79Ew6p) video tutorial.

You can find the full project in the [angular2-course-webpack-starter](https://github.com/mirkonasato/angular2-course-webpack-starter) repository.

## index.html

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf­8">
        <title></title>
      </head>
      <body>
      </body>
    </html>

## package.json - dependencies:

    "@angular/common": "2.0.1",
    "@angular/compiler": "2.0.1",
    "@angular/core": "2.0.1",
    "@angular/forms": "2.0.1",
    "@angular/http": "2.0.1",
    "@angular/platform-browser": "2.0.1",
    "@angular/platform-browser-dynamic": "2.0.1",
    "@angular/router": "3.0.1",
    "core-js": "2.4.1",
    "reflect-metadata": "0.1.8",
    "rxjs": "5.0.0-beta.12",
    "zone.js": "0.6.25"

## npm install - devDependencies:

    typescript@2.0.3
    typings@1.4.0
    webpack@1.13.2
    ts-loader@0.8.2
    html-webpack-plugin@2.22.0
    webpack-dev-server@1.16.1
    raw-loader@0.5.1
    cross-env@3.0.0
    
## To work on this project:

* Run `npm install` inside the project folder to download all the dependencies. This only needs to be done once.
* Run `npm run serve` to start a local development web server. You can now access the application at [localhost:8080](http://localhost:8080/).
* Run `npm run build` to bundle everything into the `dist` folder for deployment.
* Run `npm run build:prod` to do the same as above but enabling optimisations for production.
