# BikeProFront - Grupo 3

Proyecto Fabricas. 

Universidad de los Andes

## Ejecutar

npm install

npm start

## Ejecucion por tipo de producto

### Deploy

ng build -c club

ng build -c rental

ng build -c social

### serve

ng serve -c club

ng serve -c rental

ng serve -c social


## Firebase

Antes de realizar deploy se debe revisar en el archivo (firebase.json) el target del producto asociado y cambiarlo segun el que se vaya a compilar

### Deploy

firebase deploy --only hosting:club

firebase deploy --only hosting:rental

firebase deploy --only hosting:social

### serve

firebase serve --only hosting:club

firebase serve --only hosting:rental

firebase serve --only hosting:social


# Documentacion

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
