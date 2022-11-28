# Climate Change

## Description

* FIXME

---

## Installation

* Clone the project `git clone https://github.com/25web/climatechange`
* run `npm ci` in frontend/ and backend/ folders. -- FIXME

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
  mysql -u {USER} -p < webdb.sql
  ```
### Launch the environment

* Run `FIXME`

---

