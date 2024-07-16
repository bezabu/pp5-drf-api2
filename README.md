# Movie Review App

## Readme contents

- [Features](#features)
  - [Existing Features](#existing-features)
  - [Features to implement](#features-to-implement)
- [User Experience Design](#user-experience-design)
  - [User Stories](#user-stories)
- [Technologies](#technologies)
- [Testing](#testing)
  - [Manual Testing](#manual-testing)
  - [Automated Testing](#automated-testing)
  - [Validator Testing](#validator-testing)
  - [Unfixed Bugs](#unfixed-bugs)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Content](#content)
  - [Media](#media)
  - [Code](#code)
  - [Acknowledgements](#acknowledgements)

## Features

![Entity relationship diagram](/readme_assets/erd.png)

### Existing Features

- API

  - API endpoints


- Frontend

### Features to implement

## User Experience Design

### User Stories

## Technologies

- HTML has been used to structure the website.
- CSS has been used to style the website.
- JavaScript was used to create the front-end.
- JS React was used to create the one page front end application.
- Python was used to create the back-end API.
- [Django](https://www.djangoproject.com/) was the framework used to build this website.
- [ElephantSQL](https://customer.elephantsql.com/) was used to host the database.
- [Cloudinary](https://cloudinary.com/) was used to store user uploaded images.
- [React-Bootstrap 4.6](https://react-bootstrap-v4.netlify.app/) was used to create and style the front end of the website.
- [Django AllAuth](https://docs.allauth.org/en/latest/) was used to provide user account registration.
- [gunicorn](https://gunicorn.org/) was used for the web server.
- [psycopg2](https://pypi.org/project/psycopg2/) was used to adapt SQL for python.
- [whitenoise](https://whitenoise.readthedocs.io/en/stable/django.html) was used to enable serving of static files.
- [Font Awesome](https://fontawesome.com/) icons have been used for category icons, column headers and user icons.
- [Google Fonts](https://fonts.google.com/) has been used to import the Poppins font.
- [Paint.NET](https://www.getpaint.net/) was used to edit the hammer image before using it with Favicon.
- [Favicon.io](https://favicon.io/favicon-converter/) was used to create the favicon for the website.
- [GitPod](https://gitpod.io/) was used as IDE.
- [Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) were used to inspect elements of the website and test different styles.
- [GitHub](https://github.com/) has been used to store the code, images, and other contents of the website.
- [Heroku](https://dashboard.heroku.com/) was used to deploy the website to the web.
- Git was used for version control, pushing contents to GitHub.
- [Am I Responsive](https://ui.dev/amiresponsive?url=https://bb-pp5-movie-review-app-363d95a342e4.herokuapp.com/) was used to create the mock-up.
- [W3C Markup Validation Service ](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbb-pp5-movie-review-app-363d95a342e4.herokuapp.com%2F)was used to check HTML.
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fbb-pp5-movie-review-app-363d95a342e4.herokuapp.com%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)was used to check CSS.

## Testing

### Manual Testing

### Automated Testing



### Validator Testing

### Unfixed Bugs

When adding a movie the genre will be 1 regardless of input

Unable to edit reviews, returns a 400 status
When creating a review the rating will be 3 stars regardless of the form input


All functionality that required the user to be logged in would result in a 403 status code with no CSRF token in the request. This mysteriously stopped the day before submission. I did NOTHING.

## Deployment

The following steps were taken to deploy this project to Heroku:


## Credits

### Content

### Media

Site logo adapted from [this image](https://freerangestock.com/photos/119591/cinema-vector-icon.html) from free range stock
No results icon from [very icon](https://www.veryicon.com/icons/commerce-shopping/jkd_wap/no-result.html)
Default user icon from [vectorstock](https://www.vectorstock.com/royalty-free-vector/black-user-icon-vector-42797437)
File upload icon from [fontawesome via wikipedia](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_file-upload.svg)

### Code