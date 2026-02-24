# User Register

## From User Prespective 
  1. form fill up
  2. click register button 

## From Developer Prespective
  1. Destructuring form data (eg:- Fullname, email, password)
  2. Validation of form data (eg: All fields are required)
  3. Check email from database (eg: Must be unique)
  4. hash the password
  5. send token and store it to frontend (either in localhost or in cookies)
  6. store it to database 
  7. send msg .. (https status code , main-for now )
     - 200 ("Success Response"),
     - 201 ("New data created")
     - 400 ("Bad request")
     - 404 ("Not found")
     - 500 ("Internal server error")