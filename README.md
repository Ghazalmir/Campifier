# Campifier
Campifier is a web-based campground suggestion application. With Campifier, you can find new campgrounds, comment your experience and read about the others', or register your own campground and reach more travelers.

### Contents:
* 💡 [Overview](https://github.com/Ghazalmir/Campifier#-overview)
* 🛠 [Technologies Used](https://github.com/Ghazalmir/Campifier#-technologies-used)
* ⚙️ [Features](https://github.com/Ghazalmir/Campifier#%EF%B8%8F-features)
* 📣 [Disclaimer and Acknowledgements](https://github.com/Ghazalmir/Campifier#--disclaimer-and-acknowledgements)
* 🔒 [License](https://github.com/Ghazalmir/Campifier#-license)
* 🚀 [Usage](https://github.com/Ghazalmir/Campifier#-usage)


## 💡 Overview
Campifier was initially done as a part of Colt Steele's *Web Development Bootcamp* on Udemy.com (named "YelpCamp"), and has been improved, modified, and refactored as a personal project. See all features on the [features section](https://github.com/Ghazalmir/Campifier/blob/main/README.md#%EF%B8%8F-features).

Desktop View            |  Mobile View (iPhone X)
:-------------------------:|:-------------------------:
![](https://user-images.githubusercontent.com/72219373/130488763-a47e21d5-05e2-48dc-a7da-6f728ea2ad98.mp4) | ![](https://user-images.githubusercontent.com/72219373/130489788-2ada00df-0257-4a5d-ad4d-ef12cf3b487a.mp4)


## 🛠 Technologies Used


| Front-End  | Back-End | Database Management | Deployment | Animation | Graphics | Other
| :-------------: | :-------------: | :-------------: | :-------------: | :-------------: | :-------------: |  :-------------: |
| HTML5  | NodeJS  | MongoDB  | Heroku  | CSS Animations | Figma | MapBox for Maps
| CSS | ExpressJS  | Mongoose  | MongoDB Atlas  | ScrollMagic | Unsplash API | PassportJS for Authentication
| Bootstrap 5 | EJS | Cloudinary  | Git  | GSAP | Freepik | Joi for Data Validation 
| Javascript | Javascript | Unsplash Api  | Github  | | Font Awesome
- Plus 20+ npm packages used (see [this file](https://github.com/Ghazalmir/Campifier/blob/main/package.json)).

## ⚙️ Features 
- Responsive, accessible, and color-blind friendly.
- RESTful routes (Create, Read, Update, Delete) for campgrounds and reviews with safe and secure client-side and server-side validation, authentication, and authorization.
- Fully implemented cookies and sessions.
- Fully functional database search for campgrounds and maps.
- Made interactive using CSS, ScrollMagic, and GSAP.
- Interactive maps using MapBox.
- Cloud storage. 

## 📣  Disclaimer and Acknowledgements
- The campgrounds on this website are not real, and have been randomly generated from a number of databases.
- See [here](https://github.com/Ghazalmir/Campifier/blob/main/CREDITS.md) for credits given to unsplash.com and freepik.com artists.

## 🔒 License
The source code for Campifier is licensed under the MIT license, which can be found [here](https://github.com/Ghazalmir/Campifier/blob/main/LICENSE.md).

## 🚀 Usage
### Installation:
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
8. Open your browser and go to [localhost:3000](http://localhost:3000/).


### Seeding the database:
1. Open Terminal and `cd`to the project directory on your system.
2. Run the following command to seed the database: `node seeds/index.js`. This command will earase the data from the website's database, and then create 300 new campgrounds randomly from two data bases (see [this file](https://github.com/Ghazalmir/Campifier/blob/main/seeds/seedHelpers.js) for names and [this file](https://github.com/Ghazalmir/Campifier/blob/main/seeds/cities.js) for locations). 
3. For more information about the seeding process, see [this file](https://github.com/Ghazalmir/Campifier/blob/main/seeds/index.js).

**Note**: Because of the structure of the campgrounds’ model, which has been designed for individually created campgrounds by real users, all the campgrounds created with this method will have the same image (see [this file](https://github.com/Ghazalmir/Campifier/blob/main/models/campground.js) for more information).
