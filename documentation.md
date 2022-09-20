#Backend 
-> Created the express server as the entry point for backend 
-> The APIs were created using GraphQL
-> The schema.js file is segmented into GraphQL type definitions, queries and mutations
-> The queries are written for reading the data from the database 
-> The mutations are written for writing data to the database
-> The db folder contains the connection to database PostgreSQL database
-> It also contains the definitions for creating the tables and the database


#Frontend
-> The mother component or the App commponent is wrapped with apollo graphql client provider
-> With in memory cache to limit api calls
-> The three pages are divided into components to ensure clean code and resuability
-> The My Products page allows the user to CRUD operations
-> The All Products page lists all the products added by all the users
-> All Products pages also has the functionalties of buy and selling the products
-> Finally the transactions page displays the products bought and rented 
-> Only the authenticated user is allowed to perform CRUD operations
-> If a user is not registerd then they can register and then login 



#Acknowledgements/Challenges
-> This is the first time I worked with PostgreSQL and GraphQL at backend
-> Also first time consuming API at the frontend using Apollo CLient
-> There was learning curve on both sides 
-> Due to time contraint the implementation may not be perfect 
-> Tried to implement all the functinalites 
-> But I am open to discuss those improvements
-> Personally it was great learning and implementation experience for me  