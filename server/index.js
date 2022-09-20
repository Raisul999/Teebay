const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema')
const pool = require('./db/db');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', graphqlHTTP({
    schema,
    graphiql: true,
  }))

// app.post('/register', async(req,res)=>{
//   const {firstName, lastName, address, email, phone, password} = req.body
//   await pool.query(`INSERT INTO users(firstName, lastName, address, email, phone, password)
//   VALUES($1, $2, $3, $4, $5, $6) `, [firstName, lastName, address, email, phone, password])
//   const data = await pool.query(`SELECT * FROM users`)
//   // let result = data.then(res=>result=res.rows)
//   res.status(200).json(data.rows)
// })

// app.post('/login', async(req,res)=>{
//   const {email, password} = req.body
//   const data = await pool.query(`SELECT * FROM users WHERE email=$1 and password=$2`, [email, password])
//   console.log(data)
//   res.status(200).json(data.rows)
// })
  

const PORT = 5000;
app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`));