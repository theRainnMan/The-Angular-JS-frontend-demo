Frontend Developer Test
=============================================
Breaf description: In this project I used Angular JS as the frontend framework to design the website
and there used NPM as the package manager. The web pages are two parts login and recipe page. The application is Single page application and backend is node JS express. This time I didn't use any database so I create a
fake data in JS as data service. There is also a routing system the data access was based on the Restfull service use Http request. Frontend munu display I used CSS media query to design a responsive page.

How to run the application
---------------------------

First: clone it and run "npm install"
Second: run "node server.js" it will indicate "Express server started!"
Third: Use browser access "http://localhost:3000/home.html#/login" to access login page
also you can access menu page by clicking "OUR MENU" on the left top of website

How it works
--------------
1. Login Page design detail
There is a user information in the routes/dataservice.js you can use admin@gmail as the email and 
password is 12345678 to login the user. The login method was use $http.post method for authentication.
The email input validation and password length validation. If you input not email it will have alert

2. Menu page design detail
You can jump to the menu page once you successful login and the recipe information was save in the dataservice.js as an JSON object so the frontend can get the info by use $http.get method and return
a JSON object. Use Angular data binding to display.

The favourite icon design
I used two picture one is white heart and the other one is red heart once you click the icon it will change the value and switch picture


The rate system design
I used CSS for design the rating system the background color will represent the grade and use two way data binding to attach grade there is an input box for change the rate.


Test
--------
The Jasmine test for JaveScript here I tested the password whether is strong or not test file was under
/test/unit/controllersTest.js


-------------------
