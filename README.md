# TestLab

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.1.

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


## Notes
Command descriptions :
#describe - accepts a string(the name for the test, generally the component name) and a
call back which contains test functions(it) and other suite declarations.

#it - accepts a string(description of the test) and a callback function
which test the component for a particular functionality.

#beforeEach - accepts a call-back in which we execute the code reuqired to initialise the component before executing each test code (it functions)

#spyOn(service, 'getTodos').and.callFake(() => {
      return from([[1, 2, 3]]);
}); - used to mock a service call while testing a service which handles the server communications.
