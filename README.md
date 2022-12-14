# Climate Change

## Description

2nd year OAMK website project on climate change involves the use of React, Node.js, and MySQL to create a website featuring different charts and visualizations on the topic.


## Installation

* Clone the project `git clone https://github.com/25web/climatechange`
* run `npm ci` in frontend/ and backend/ folders.

### .env

* Rename /backend/.env.example &rarr; /backend/.env
* Generate JWT_SECRET
  ```js
  > node
  > require('crypto').randomBytes(64).toString('hex')
  ```
* Fill rest of the fields with database credentials.

### Database

* Import project database
  ```
  mysql -u {USER} -p < docs/webdb.sql
  ```
### Launch the environment

* Run `npm start` in frontend/ and backend/ folders.

---
Creators Joni Pahikainen, Tomi Laine Hilppa Huhtanen and Juha-Pekka Kesonen

