# About: MidCupid

MidCupid is a web application that clones existing dating website/mobile app OKCupid, that was created during project week 20 at App Academy.
It incorporates the React and Redux technologies on the frontend with Flask/SQLAlchemy for the backend.

Live Site: [MidCupid](https://midcupid-no60.onrender.com) 

Links to Project Wiki:

- [Database Schema](https://github.com/ChrisE1911/python_project/wiki/Database-Schema)
- [Feature List](https://github.com/ChrisE1911/python_project/wiki/Feature-List)

**_This project is built with:_**

- JavaScript
- React
- Redux
- Python
- Flask/SQLAlchemy

# Features Directions:

You will be able to test the features without signup/login by clicking 'try it out' button in the login modal
![meetup-homepage-screenshot]

[meetup-homepage-screenshot]: ./assets/Screen%20Shot%202023-01-22%20at%202.04.25%20PM.png

# Features List:

## User Authentication:

- New user without account can log in as demo user
- New users can create account with username, email, and password
- Existing users can log in and create groups and events
- Users can log out anytime redirected to splash page
- Users can see what inputs are invalid

## Groups/Events:

- Logged in user can create group, edit group and delete group. If not authorized, buttons won't show for above actions.
- Logged in user can create events and delete events associated to their group

## Future Feature Plans:

- User Profile Page where they can see their own groups and events
- Join a group
- RSVP
- Create
- 404 Page
