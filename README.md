# MVC-Tech-Blog

## Description

This repository contains Javascript code, executed with Node.js, that generates  WordPress like technology blog appplication. This project utilizes npm packages express.js, mysql, sequelize, and handlebars. This repository follows the MVC file structure format.

MySQL is utilized for creating the databases that the user credentials, posts, and comments are stored in. Sequelize is used in conjunction with node.js for handling functions and object-related mapping of database stored data. Handlebars was the HTML templating library used for this project.

This application hosts community blog posts related to technology and coding topics. When logged in or after signing up, users can view any and all posts shared by other users and may leave comments on these posts. When logged in, users can view their personal dashboard that will display any and all posts they have contributed to the site. Any of these blog posts may be edited or deleted by the user. 

## Installation
Install the necessary npm packages for this app by running npm install in your terminal.

## Usage
![homepage view](</public/css/Screenshot (29).png>)

## Credits
For this project I referenced the UNH Bootcamp repository's 13.18 exercise when coding the hooks in the User model. I also referenced this challenge's README.md examples for seeding the Post and Comment models. I also perdiodically referenced the documentation from Bootstrap when creating cards as well as Modzilla's documentation on the difference between reload() and replace(). LAstly, I would like to thank Lucky from AskBCS Learning Assitants who helped me troubleshoot an issue I was experiencing with some of my event handlers. With his help I learned that I had a conflict between the middleware function associated with my 'public' directory and some of my file paths.


## Links
GitHub: https://github.com/sambrez/MVC-Tech-Blog
Deployed Application via Heroku: https://techblog-mvc-14-85eba46978d7.herokuapp.com/