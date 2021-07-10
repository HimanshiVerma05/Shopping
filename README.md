# Description 
This is sample e-commerce template developed for sole learning purpose. It can be further enhanced as a shopping site . The technologies involved are - Angular 11, Bootstrap4 , HTML 5 and CSS 3
# Shopping

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

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

##Assignment Details -
Project Information:-
1.	GitHub link :- 
https://github.com/HimanshiVerma05/Shopping

2.	Netlify site deployment URL :-
https://shoppingdunia.netlify.app/

 IMPLEMENTATIONS IN THE APPLICATION.
•	Quantity-control and checkout and shared module are the components shared and used in other components.
•	Implemented lazy loading in checkout module.
•	Global styles common to all modules and components are added in src/styles.css
•	Auth guard and user authentication service for authentication and routing
•	Credentials to login into the application – test,test or B,B

•	Test Cases:- 
o	Made a unit test in the cart service to check if an item is added to cart the cartlist value should be greater than 1 , File Name – cart.service.spec.ts
o	Made a unit test in the Login component to spy on authenticate method of UserAuthService such that if login method of LoginPageComponent is called then the authenticate method of UserAuthService should be expected to call.
File Name :- login-page.component.spec.ts
o	Made a unit test case in user auth service to check the authenticate method - //Test case to check if the user B and password B is able to be auhenticated.
File Name :- user-auth.service.spec.ts

•	Bonus point attempt - Categorised the products based on categories – Men, Women , Kids .
•	Bonus point attempt - Used translation in english as well as german.

•	Made use of Bootstrap 4
•	Used needs-validation of bootstrap in order to validate form in checkout-page.component.html

•	Services created :-
1.	User data service – to fetch the user data from mock data json.
2.	Product service – To fetch the products from the mock data json
3.	Cart Service – For addition, update and deletion of products from the cart.



