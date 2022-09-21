#Backend 
1) Created the express server as the entry point for backend 
2) The APIs were created using GraphQL
3) The schema.js file is segmented into GraphQL type definitions, queries and mutations
4) The queries are written for reading the data from the database 
5) The mutations are written for writing data to the database
6) The db folder contains the connection to database PostgreSQL database
7) It also contains the definitions for creating the tables and the database


#Frontend
1) The mother component or the App commponent is wrapped with apollo graphql client provider
2) With in memory cache to limit api calls
3) The three pages are divided into components to ensure clean code and resuability
4) The My Products page allows the user to do CRUD operations
5) The All Products page lists all the products added by all the users
6) All Products pages also has the functionalties of buy and selling the products
7) Finally the transactions page displays the products bought and rented 
8) Only the authenticated user is allowed to perform CRUD operations
9) If a user is not registerd then they can register and then login 



#Acknowledgements/Challenges
1) This is the first time I worked with PostgreSQL and GraphQL at backend
2) Also first time consuming API at the frontend using Apollo CLient
3) There was learning curve on both sides 
4) Due to time constraint the implementation may not be perfect 
5) Tried to implement all the functinalites 
6) But I am open to discuss those improvements
7) Personally it was great learning and implementation experience for me  
