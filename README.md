# Beyonce 
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

### Landing

Users will have access to the navbar and home page

<!-- <img src="/public/images/home.png" width="200" height="200"> -->

### Moods Index

Users can click on a specific mood

### Problem Profile

In the mood show page the user will find posts by other users correlated to the mood

### Add Post

In the mood show page the user can add a new post

### Solution Show

A more detailed list of solution cards

### Solution Card Profile

A detailed description of a specific solution

### Create Account

The page to register an account for the site

### Login

The login modal

## Data Models

- MoodSchema - Title: String, - Description: String, - Image: String,

  - Posts: [Posts.Schema],

- PostsSchema - Username: String, - Description: String, - Image: String, - Link: String,

- _Stretch Goal_

  - User Schema
    - Name:
      - Type: String,
      - Required: true,
    - Email:
      - Type: String,
        - Required: true,
    - Password:
      - Type: String,
      - Required: true,

- One to many, embedded data

## Milestones

#### Sprint 1 Planning - April 29 - May 1

- Project Planning
- Wireframe
- ERD
- Scope
- User story
- Approval

#### Sprint 2 -May 1 - 5

- File structures
  - MVC- Models, Views, Controllers
- Boilerplates for core files
- Get server running
- Route planning blueprint
- Connect the files together
- Database setup
- Deploy to Heroku

#### Sprint 3 - May 6 - 8

- Authentication
- Login
- Profile
- Bootstrap
- Styling

## References

- MDN https://developer.mozilla.org/en-US/
- getbootstrap.com
- Heroku
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
- https://gist.github.com/uupaa/f77d2bcf4dc7a294d109

---

[back to the top](#Beyonce)
