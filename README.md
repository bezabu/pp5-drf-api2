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


### Existing Features

- Backend

![Entity relationship diagram](/readme_assets/erd.png)

  - Database
    - The backend connects to a database of movies and reviews.

![API endpoints](/readme_assets/APIendpoints.jpg)

  - API endpoints
    - The diagram above shows an example of some of the API endpoints
    - 

- Frontend

  - Nav bar

![Home page](/readme_assets/homepageloggedout.jpg)

  - Reviews page

![Home page](/readme_assets/revewdetailwithcomments.jpg)

  - Review detail

![movies page](/readme_assets/moviespageloggedin.jpg)

  - Movies page

  - Moive detail

  - Profile

![profile page](/readme_assets/profilepage.jpg)

  - Review form

### Features to implement

## User Experience Design

### User Stories

Navigation & Authentication
- Navigation: As a user I can view a navbar from every page so that I can navigate easily between pages
- Routing: As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh
- Authentication - Sign up: As a user I can create a new account so that I can access all the features for signed up users
- Authentication - Sign in: As a user I can sign in to the app so that I can access functionality for logged in users
- Authentication - Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to
- Authentication - Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
- Navigation: Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up
- Avatar: As a user I can view user's avatars so that I can easily identify users of the application

Adding & Liking Movies
- Create reviews: As a logged in user I can add movies to the list of available movies to review
- View a movie: As a user I can view the details of a single movie so that I can learn more about it
- Like a movie: As a logged in user I can like a movie so that I can show my support for the films that interest me

Adding & Liking Reviews
- Create reviews: As a logged in user I can create reviews so that I can share my opinions on film with the world!
- View a review: As a user I can view the details of a single review so that I can learn more about it, add a like and add comments

The Reviews Page
- View most recent reviews: As a user I can view all the most recent reviews, ordered by most recently created first so that I am up to date with the newest content
- As a user, I can search for reviews with keywords, so that I can find the reviews and user profiles I am most interested in.
- View liked reviews: As a logged in user I can view the reviews I liked so that I can find the reviews I enjoy the most
- View popular reviews: As a logged in user I can view the most liked reviews so that I can find the reviews other users are enjoying the most
- View reviews of followed users: As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are writing about
- Infinite scroll: As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page" etc

The Review Page
- Review page: As a user I can view the review page so that I can read the comments about the review
- Edit review: As a review owner I can edit my review content so that I can make corrections or update my review after it was created
- Create a comment: As a logged in user I can add comments to a review so that I can share my thoughts about the review
- Comment date: As a user I can see how long ago a comment was made so that I know how old a comment is
- View comments: As a user I can read comments on reviews so that I can read what other users think about the reviews
- Delete comments: As an owner of a comment I can delete my comment so that I can control removal of my comment from the application
- Edit a comment: As an owner of a comment I can edit my comment so that I can fix or update my existing comment

The Movies Page
- Movies page: As a user I can see a list of movies that can be reviewd
- Movie reviews: As a logged in user I can click a link that will take me to a page where I can write a review of the specific movie
- Movies statistics: As a user I can see how many reviews have been added for each movie and what the average score is
- Mobile first design: As a user I can see different amounts of information depending on the screen size of the device I am using

The Movie Page
- Movie reviews: As a logged in user I can click a link that will take me to a page where I can write a review of the specific movie
- Movies statistics: As a user I can see how many reviews have been added for each movie and what the average score is
- Reviews list: As a user I can click on a link that will display a list of all reviews of that movie

The Profile Page
- Profile page: As a user I can view other users profiles so that I can see their reviews and learn more about them
- Most followed profiles: As a user I can see a list of the most followed profiles so that I can see which profiles are popular
- User profile - user stats: As a user I can view statistics about a specific user: bio, number of reviews, follows and users followed so that I can learn more about them
- Follow/Unfollow a user: As a logged in user I can follow and unfollow other users so that I can see and remove reviews by specific users in my reviews feed
- View all reviews by a specific user: As a user I can view all the reviews by a specific user so that I can catch up on their latest reviews, or decide I want to follow them
- Edit profile: As a logged in user I can edit my profile so that I can change my profile picture and bio
- Update username and password: As a logged in user I can update my username and password so that I can change my display name and keep my profile secure



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

All JS tests passed
![automated tests](/readme_assets/tests.jpg)

### Validator Testing

HTML passes through the W3C Markup Validation Service with no errors

CSS passes through the W3C CSS Validation Service with no errors

When using the WebAIM Web Accessibility Evaluation Tool, 3 alerts were returned:

![WAVE tool results](/readme_assets/wave.jpg)


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

