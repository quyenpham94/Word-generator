# Word Generator
 This app provides great list of random words organized based on different topics. To play this, make two teams with your group of friends or family members. A person on each team must draw, act out or provide clues without saying it. One word correct, you team will gain 1 point.

# Tech Stack
- Frontend: React.js, CSS, Bootstrap
- Backend: Node.js, Express, PostgreSQL
  This project will be a web application that can be used on different browsers. It will be focused on the front-end development. It will has a simple user-friendly interface that attracts the users to play. The back-end will be straightforward with a custom API.

# User
 Everyone can access this app. Since this app will be built in a purpose of simple, easy-to-use, so anyone including kids, teenagers, adults, and seniors will be able to play it. Users need to create an account to use all the functions of the app. 

# API
I will write a custom API that contains about 10 different topics and each topics will have 10 words.


# Database Schema
The app uses 3 models: Users, Topics, Favorite Topics. The Users model saves the user_id, username, password, and an email to the database. The Topics model saves foreign key to user_id to the database. The Favorite Topics model saves a foreign key to user_id, topics_id to the database. User signup, login, and logout functionality was implemented, as well as authentication and authorization. An account is required to access any of the detailed pages. Username and email must both be unique.

# Functionality
Users can register to the app to get access to the game. When logged in, users can choose topics that they want to play. Each topics will have various random words. The users also can save each topics as their favorite. 

