#Package Installation 
-> From the root directory run npm install 
-> For npm intall error try with npm install --force flag
-> Go to client directory and run npm install for client module
-> For npm intall error try with npm install --force flag

#Project Run
-> From the root directory run npm run dev 
-> This will run coth the server and the client concurrently 
-> Or from root directory run npm start
-> And from client directory run npm start
-> Client runs on localhost:3000 and Server runs on localhost:5000
-> GraphiQL queries and mutations can be accessed at localhost:5000/api

#Database import
-> The database named teebay.sql is imported and will be attached 
-> Please create a new database on pgAdmin and retore the imported database
-> Change the password on server->db->db.js 
-> Or set the given password 
-> Once connected to the database the user can register or login to the frontend