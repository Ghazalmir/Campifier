# Campifier
Campifier is a web-based campground suggestion and booking application. With Campifier, you can find new campgrounds, comment your exprience and read about the others', or register your own campground and reach more traveleres.


## 💡 Overview
Campifier was initially done as a part of Colt Steele's *Web Development Bootcamp* on Udemy.com (named "YelpCamp"), and has been improved, modified, and refactored as a personal project. See all features on the [features section](https://github.com/Ghazalmir/Campifier/new/main?readme=1#feautures).


## 🛠 Technologies Used


| Front-End  | Back-End | Database Management | Deployment | Animation | Graphics | Other
| :-------------: | :-------------: | :-------------: | :-------------: | :-------------: | :-------------: |  :-------------: |
| HTML5  | NodeJS  | MongoDB  | Heroku  | CSS Animations | Figma | MapBox for Maps
| CSS | ExpressJS  | Mongoose  | MongoDB Atlas  | ScrollMagic | Unsplash API | PassportJS for Authentication
| Bootstrap 5 | EJS | Cloudinary  | Git  | Gsap | Freepik | Joi for Data Validation 
| Javascript | Javascript | Unsplash Api  | Github  | | Font Awesome
- Plus 20+ npm packages used (see [this file](https://github.com/Ghazalmir/Campifier/blob/main/package.json)).

## ⚙️ Feautures 
- Responsive, accessible, and colour-blind friendly.
- RESTful routes (Create, Read, Update, Delete) for campgrounds and reviews with safe and secure client-side and server-side validation, authentication, and authorization.
- Fully implemented cookies and sessions.
- Fully functional database search for campgrounds and maps.
- Made interactive using CSS, ScrollMagic, and GSAP.
- Interactive maps using MapBox.
- Cloud storage. 

## 📣  Disclaimer and Aknowledgements
- The campgrounds on this website are not real, and have been randomly generated from a number of databases.
- See [here]() for credits given to unsplash.com and freepik.com artists.

## 🔒 Licence
The source code for Campifier is licensed under the MIT license, which you can be found [here](https://github.com/Ghazalmir/Campifier/blob/main/LICENSE.md).

## 🚀  Code Usage
### Steps:
1. Fork this repository. 
2. Make sure you have MongoDB and nodeJS installed.
3. Create a Cloudinary account to get an API key and secret code.
4. Create a MapBox account and get the map token. 
5. Open Terminal and `cd`to the project directory on your system and type `npm install` to install all of the dependencies.
6. Create a `.env` file in the root of the project and add the following:
 ```
CLOUDINARY_CLOUD_NAME = '<your cloudinary cloud name>'
CLOUDINARY_KEY = '<your cloudinary key>'
CLOUDINARY_SECRET = '<your cloudinary secret code>'
MAPBOX_TOKEN = '<your mapbox token>'
```
7. Run the website by typing `node app.js` on Terminal.
8. Open your browser and go to [localhost:3000](localhost:3000).
