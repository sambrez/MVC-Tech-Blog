# MVC-Tech-Blog

## Description

This repository contains Javascript code, executed with Node.js, that generates an SVG file containing a generic logo. This project utilizes npm packages inquirer, jest, and fs. 

When initialized, the app prompts the user to answer a series of questions regarding the features to be included in the generated logo including text, text color, shape of the logo, and shape color. Based on the user's responses, an SVG file titled 'logo.svg' is created that contains a 300 x 200 logo that reflects the input provided.

The file shapes.test.js utilizes the jest package for testing. This file tests the render function of each shape class (Circle, Square, Triangle), to make sure that it is generating the expected shape of a set size and color. 

This is the first time that I have ever worked with svg files. The most challenging part of this project that I ran into was overcoming an issue with layering of elements within the svg file. At first, the generated svg was not displaying both the shape and the text and discovered that the issue was that the elements were layering over eachother. 


## Installation
N/A

## Usage
https://drive.google.com/file/d/1DJW0CgYeovNB1BasYFyCgrd6MFWBE3el/view

## Credits
I heavily utilized the MDN web docs on svg files for this project. Specifically, I referenced documentation on the basics of svg files, basic shapes, and text. This documentation is what helped me resolve the layering of elements issue that I faced which had to do with the order in which variables were placed in the svg string. 


## Links
GitHub: 
Deployed Application via Heroku: 