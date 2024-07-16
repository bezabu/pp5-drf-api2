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
- Python was used to create the back-end API.
- [JS React](https://react.dev/) was used to create the one page front end application.
- [Django](https://www.djangoproject.com/) was the framework used to build this website.
- [Django Rest Framework](https://www.django-rest-framework.org/) was used to build the back end API
- [ElephantSQL](https://customer.elephantsql.com/) was used to host the database.
- [Cloudinary](https://cloudinary.com/) was used to store user uploaded images.
- [React-Bootstrap 4.6](https://react-bootstrap-v4.netlify.app/) was used to create and style the front end of the website.
- [Django AllAuth](https://docs.allauth.org/en/latest/) was used to provide user account registration.
- [gunicorn](https://gunicorn.org/) was used for the web server.
- [psycopg2](https://pypi.org/project/psycopg2/) was used to adapt SQL for python.
- [whitenoise](https://whitenoise.readthedocs.io/en/stable/django.html) was used to enable serving of static files.
- [Font Awesome](https://fontawesome.com/) icons have been used for category icons, column headers and user icons.
- [Google Fonts](https://fonts.google.com/) has been used to import the Arvo & Kanit fonts.
- [Paint.NET](https://www.getpaint.net/) was used to edit images.
- [Favicon.io](https://favicon.io/favicon-converter/) was used to create the favicon for the website.
- [GitPod](https://gitpod.io/) was used as IDE.
- [Google Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) were used to inspect elements of the website and test different styles.
- [GitHub](https://github.com/) has been used to store the code, images, and other contents of the website.
- [Heroku](https://dashboard.heroku.com/) was used to deploy the website to the web.
- Git was used for version control, pushing contents to GitHub.
- [Am I Responsive](https://ui.dev/amiresponsive?url=https://bb-pp5-movie-review-app-363d95a342e4.herokuapp.com/) was used to create the mock-up.
- [W3C Markup Validation Service ](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbb-pp5-movie-review-app-363d95a342e4.herokuapp.com%2F)was used to check HTML.
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fbb-pp5-movie-review-app-363d95a342e4.herokuapp.com%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)was used to check CSS.
- [CI Python Linter](https://pep8ci.herokuapp.com/) was used to test Python code.
- [Wave Web Accessibility Evaluation Tool](https://wave.webaim.org/report#/https://bb-pp5-movie-review-app-363d95a342e4.herokuapp.com/) was used to test the website's accessibility.
- Lighthouse was used to run an audit of the website.

## Testing

### Manual Testing



All functionality that required the user to be logged in would result in a 403 status code with no CSRF token in the request. This mysteriously stopped the day before submission. I did NOTHING.

### Automated Testing



### Validator Testing

### Unfixed Bugs






## Deployment

The following steps were taken to deploy this project to Heroku:

1. Create new app in Heroku, selecting Europe as the region

2. In Settings, config vars, add the config vars CLOUDINARY_URL, DATABASE_URL, DISABLE_COLLECTSTATIC, ALLOWED_HOST, CLIENT_ORIGIN and SECRET_KEY

3. In the Deploy section, go to deployment method, select GitHub, search for the repository and click connect.

4. Scroll down to Manual Deploy, ensure the main branch is selected and click Deploy Branch



The deployed app may be found [here](https://bb-pp5-movie-review-app-363d95a342e4.herokuapp.com/)


## Credits

### Content

Movie details such as director, release date etc. were taken from wikipedia.

### Media

Site logo adapted from [this image](https://freerangestock.com/photos/119591/cinema-vector-icon.html) from free range stock
No results icon from [very icon](https://www.veryicon.com/icons/commerce-shopping/jkd_wap/no-result.html)
Default user icon from [vectorstock](https://www.vectorstock.com/royalty-free-vector/black-user-icon-vector-42797437)
File upload icon from [fontawesome via wikipedia](https://commons.wikimedia.org/wiki/File:Font_Awesome_5_solid_file-upload.svg)

### Code

