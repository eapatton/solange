# Beyoncé 
# Mooodz

## Index:

- [Scope](#Scope)
- [User Stories](#user-stories)
- [Wireframes](#wireframes)
- [Data Models](#data-models)
- [Milestones](#milestones)

## Scope

The final objective is to build an app where users can pick a Beyonce mood and make posts that correlate with that level of Beyonce they are feeling. Users will be able to browse an index of Beyonce levels, select the mood/level, and then view a description and posts by other users feeling that mood. Profiles will have a list of your posts.

##### Technologies in play

- NodeJs
  - MongoDB,
  - Mongoose,
  - Express,
  - Body-parser,
  - Bcrypt
  - Express-session
- Bootstrap
- HTML
- CSS
- Heroku

## User Stories

- Homepage

  - A carousel of Beyonce pictures
  - Accessed from the Navbar by the name of the site in the right hand corner
  - Hamburger Navbar links with a “signup”, “login” “mood” dropdown menu and “profile”

- Mood Index Page

  - An index of Beyonce Mood cards- “Naughty Girl” “Diva” “XO” “Flawless” “Queen Bey”
  - A corresponding image that represents the mood, a title and brief description, view button (“Upgrade U”)

- Mood Show Page

  - Where users can make posts to inspire and cultivate the empowerment
  - There posts can have an image, description, link to a song or youtube video
  - Stretch Goal- like and comment on others posts

- Profile Page

  - Has a username and list of their posts
  - Stretch Goal- Picture

- Non-authenticated Users can:

  - Browse the website, view people's posts but not make any posts of their own

- Authenticated Users can:
  - Login
    - Modal pop-up
    - After Logging in pop up will disappear
  - Registration
    - Modal pop-up
    - Automatically login after register
    - Send Back to Profile page

## Wireframes

### Landing Page

Users will have access to the navbar and home page

<!-- <img src="/public/images/home.png" width="200" height="200"> -->

### Moods Index

Users can click on a specific mood

### Moods Info Page

In the mood show page the user will find posts by other users correlated to the mood

### Add Post

In the mood show page the user can add a new post

### Edit Post

In the mood show page the user can edit their post

### Profile

A profile page for authenticated users

### Create/Login Account

A modal to login/register an account for the site

## Data Models

- MoodSchema 
  - Title: String, 
  - Description: String, 
  - Image: String,
  - Posts: [Posts.Schema],

- PostsSchema 
  - Title: String,
  - Description: String,
  - Image: String,
  - Link: String,

- _Stretch Goal_

- User Schema
   - Username:
     - Type: String,
     - Required: true,
  - Password:
    - Type: String,
    - Required: true,
   - Posts: [Posts.Schema]  

- One to many, embedded data

## Milestones

#### Sprint 1 Planning - April 29 - May 1

- Project Planning
- Wireframe
- ERD
- Scope
- User story
- Approval

#### Sprint 2 -May 1 - 3

- File structures
  - MVC- Models, Views, Controllers
- Models- write out Schemas
- Embedded posts in the Mood schema
- Boilerplates for core files
- Get server running
- Connect the files together
- Database setup
- Seed Data

#### Sprint 3 - May 4 - 6

- EJS vs. handlebars for front end templates
- Route planning blueprint
- Connect the files together
- CRUD functionality

#### Sprint 4 - May 7 - 9

- Deploy to Heroku
- Authentication
- Login
- Profile
- Bootstrap
- Styling

#### Sprint 5 - STRETCH

- Comment and like posts
- Music on the site

## References

- MDN https://developer.mozilla.org/en-US/
  - https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index
- getbootstrap.com
- Heroku
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
- https://gist.github.com/uupaa/f77d2bcf4dc7a294d109

- coolors.co 
- Google Fonts
- https://www.jqueryscript.net/demo/Fullscreen-Hamburger-Menu-Plugin-jQuery-Overlay-Menu/
- https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/


## Beyoncé Links
- https://www.theodysseyonline.com/best-beyonce-lyrics
- https://www.beyonce.com/album/lemonade-visual-album/lyrics/
- https://www.goalcast.com/2017/06/27/top-18-most-empowering-beyonce-quotes-2/
- https://iam.beyonce.com/



---

[back to the top](#Beyoncé)
