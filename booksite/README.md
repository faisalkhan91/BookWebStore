# Booksite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

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


Project Requirement:

Below is the updated requirement on the BookStore application:

    1) Create a Header with two buttons 1. Home 2. Books

    2) On the click of Home, display a welcome message. This message should be written in .ts file and it should be shown in .html file using binding

    3) On the click of the Books button on the header, it should open a new page which will show a button to add a new book and it should also display the list of all the books. Display can be a list view or any other design you prefer.

    4) On the click of button to add new book, it should open a new page which will display a form to enter details of the book and it should be submitted and all the details should be captured to save it into database using web api call.

    5) Use firebase or implement a webapi which will connect to database for storing the records.

    6) Use httpclient service to connect to the firebase/webapi service to do CRUD operations.

    7) Create a seperate service to handle all the CRUD operation on firebase/webapi service.

    8) Create a book model for capturing the details of the book.

    9) Use Routing for navigating between pages or opening new pages.

    You can use this application later for adding more features as required like showing the details of the book after clicking a book or moving a book to the shopping list etc..

