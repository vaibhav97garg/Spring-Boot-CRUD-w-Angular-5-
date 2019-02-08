# Spring-Boot-CRUD-w-Angular-5-
This web application runs a spring boot CRUD application in the back end. 
The front end is developed using Angular 5 using Angular CLI. 

node.js and npm need to be installed before you can install Angular CLI.
Once it is installed, create a new Angular project using Angular CLI.

ng new SpringBoot --routing

Next step is to generate the service and the various components required for the application.

ng g s employee //creates the employee service

ng g c employee-details // generates the employee-details component to print the details of the employees

ng g c employee-list //generates the employee-list component to print the list of all the employees

ng g c create-employee //generates the create-employee component to add a new employee into the database

ng serve //to run the application
