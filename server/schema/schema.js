const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLInt,
    GraphQLID,
    GraphQLString,

} = require('graphql')

const pool = require('../db/db')

//Login Type
const LoginType = new GraphQLObjectType({
    name: 'Login',
    fields: () => ({
        id: { type: GraphQLID },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
    })
})

//Singup Type
const SignUpType = new GraphQLObjectType({
    name: 'Signup',
    fields: () => ({
        id: { type: GraphQLID },
        first_name: { type: GraphQLString },
        last_name: { type: GraphQLString },
        address: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
        password: { type: GraphQLString },
    })
})

const ProductType = new GraphQLObjectType({
    name: 'Product',
    fields: () => ({
        id: { type: GraphQLID },
        user_id: { type: GraphQLInt},
        title: { type: GraphQLString },
        categories: { type: GraphQLString },
        description: { type: GraphQLString },
        price: { type: GraphQLInt },
        rent: { type: GraphQLInt },
        time: { type: GraphQLString },
    })
})

const TransactionType = new GraphQLObjectType({
    name: 'Transaction',
    fields: () => ({
        id: { type: GraphQLID },
        product_id: { type: GraphQLInt},
        user_id: { type: GraphQLInt },
        product_name: { type: GraphQLString },
        action: { type: GraphQLString },
        time: { type: GraphQLString },
    })
})

// Queries
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(SignUpType),
            async resolve(parent, args) {
                const data = await pool.query(`SELECT * FROM users`)
                return data.rows
            }
        },

        products: {
            type: new GraphQLList(ProductType),
            async resolve(parent, args) {
                const data = await pool.query(`SELECT * FROM products`)
                return data.rows
            }
        },

        userProducts: {
            type: new GraphQLList(ProductType),
            args: {
                id: { type: GraphQLInt }
            },
            async resolve(parent, args) {
                const data = await pool.query(`SELECT * FROM products WHERE user_id = $1`, [args.id]);
                // console.log(data.rows);
                return data.rows
            }
        },

        userProduct: {
            type: ProductType,
            args: {
                id: { type: GraphQLID },
                user_id: { type: GraphQLInt }
            },
            async resolve(parent, args) {
                const data = await pool.query(`SELECT * FROM products WHERE user_id = $1 and id=$2`, [args.user_id,args.id]);
                // console.log(data.rows[0]);
                return data.rows[0]
            }
        },

        allTransactions:{
            type: new GraphQLList(TransactionType),
            async resolve(parent, args){
                const data = await pool.query(`SELECT * FROM transactions`);
                return data.rows
            }
        }



    }
})

//Mutations
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        register: {
            type: SignUpType,
            args: {
                first_name: { type: GraphQLString },
                last_name: { type: GraphQLString },
                address: { type: GraphQLString },
                email: { type: GraphQLString },
                phone: { type: GraphQLString },
                password: { type: GraphQLString }
            },
            async resolve(parent, args) {
                // console.log(args.firstName)
                await pool.query(`INSERT INTO users(first_name, last_name, address, email, phone, password)
                  VALUES($1, $2, $3, $4, $5, $6) `, [args.first_name, args.last_name, args.address, args.email, args.phone, args.password])
                const data = await pool.query(`SELECT * FROM users WHERE email=$1`, [args.email])
                // //   console.log(data)
                // //   console.log(data.rows[0])
                return data.rows[0]

            }
        },

        login: {
            type: LoginType,
            args: {
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            async resolve(parent, args) {
                console.log(args.email, args.password)
                const data = await pool.query(`SELECT * FROM users WHERE email=$1 and password=$2`, [args.email, args.password])
                // console.log(data.rows)
                return data.rows[0]
            }
        },

        addProduct: {
            type: ProductType,
            args: {
                user_id: { type: GraphQLInt },
                title: { type: GraphQLString },
                categories: { type: GraphQLString },
                description: { type: GraphQLString },
                price: { type: GraphQLInt },
                rent: { type: GraphQLInt },
                time: { type: GraphQLString },
            },
            async resolve(parent, args) {
                console.log(args)
                await pool.query(`INSERT INTO products (user_id, title, categories, description, price,rent, time) 
                VALUES($1, $2, $3, $4, $5, $6, $7)`, [args.user_id, args.title, args.categories, args.description, args.price, args.rent, args.time]);

                const data = await pool.query(`SELECT * FROM products WHERE user_id = $1 and title=$2`, [args.user_id, args.title]);
                // console.log(data.rows[0])
                return data.rows[0];
            }
        },
        updateProduct: {
            type: ProductType,
            args: {
                id: {type:GraphQLID},
                user_id: { type: GraphQLInt },
                title: { type: GraphQLString },
                categories: { type: GraphQLString },
                description: { type: GraphQLString },
                price: { type: GraphQLInt },
                rent: { type: GraphQLInt },
                time: { type: GraphQLString },
            },
            async resolve(parent, args) {
                await pool.query(`UPDATE products SET title=$1, categories=$2, description=$3, price=$4, rent=$5, time=$6
                WHERE user_id=$7 and id=$8`, [args.title, args.categories, args.description, args.price, args.rent, args.time, args.user_id, args.id])
                data = await pool.query(`SELECT * FROM products WHERE user_id=$1 and id=$2`, [args.user_id, args.id])
                // console.log(data.rows[0])
                return data.rows[0]
               
            }
        },

        deleteProduct: {
            type: ProductType,
            args: {
                id: { type: GraphQLID },
                user_id: { type: GraphQLInt }
            },
            async resolve(parent, args) {
               const data = await pool.query(`DELETE FROM products WHERE user_id=$1 and id=$2`, [args.user_id, args.id ])
            //    console.log(data.rows[0])
               return data.rows[0]
            }
        },

        rent:{
            type: TransactionType,
            args:{
                product_id: {type: GraphQLInt},
                user_id: {type: GraphQLInt},
                product_name: {type: GraphQLString},
                action: {type: GraphQLString},
                time: {type: GraphQLString}
            },
            async resolve(parent, args){
                 await pool.query(`INSERT INTO transactions (product_id, user_id, product_name, action, time)
                  VALUES ($1, $2, $3, $4, $5)`, [args.product_id, args.user_id, args.product_name, args.action, args.time]);
                
                const data = await pool.query(`SELECT * FROM transactions`)
                console.log(data.rows[0])
                return data.rows[0]
            }
        },

        buy:{
            type: TransactionType,
            args:{
                product_id: {type: GraphQLInt},
                user_id: {type: GraphQLInt},
                product_name: {type: GraphQLString},
                action: {type: GraphQLString},
               
            },
            async resolve(parent, args){
                 await pool.query(`INSERT INTO transactions (product_id, user_id, product_name, action)
                  VALUES ($1, $2, $3, $4)`, [args.product_id, args.user_id, args.product_name, args.action]);
                
                const data = await pool.query(`SELECT * FROM transactions`)
                console.log(data.rows[0])
                return data.rows[0]
            }
        }


        
        


        
    }
    




})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})