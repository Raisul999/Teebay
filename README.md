#Package Installation 
1) From the root directory run npm install. 
2) For npm intall error try with npm install --force flag.
3) Go to client directory and run npm install for client module.
4) For npm intall error try with npm install --force flag.

#Project Run
1) From the root directory run npm run dev. 
2) This will run both the server and the client concurrently. 
3) Or from root directory run npm start.
4) And from client directory run npm start.
5) Client runs on localhost:3000 and Server runs on localhost:5000.
6) GraphiQL queries and mutations can be accessed at localhost:5000/api.

#Database import
1) The database named teebay.sql is imported and will be attached. 
2) Please create a new database on pgAdmin and retore the imported database.
3) After restoring the database teebay.sql three tables named users, products and transactions should be visible.
3) Change the password on server->db->db.js. 
4) Or set the given password. 
5) Once connected to the database the user can register or login to the frontend.
