import { gql } from '@apollo/client';
const LOGIN_USER = gql`
  mutation login($email:String!, $password:String!){
    login(email:$email, password:$password){
        id
        email 
    }
  }

`

const REGISTER_USER = gql`
  mutation register($firstName:String!, $lastName:String!, $address:String!, $email:String!, $phone:String!, $password:String!){
    register(first_name:$firstName, last_name:$lastName, address:$address, email:$email, phone:$phone, password:$password){
        id
        email 
        phone
    }
  }

`
const ADD_PRODUCT = gql`
  mutation addProduct($userID:Int!, $title:String!, $categories:String!, $description:String!, $price:Int!, $rent:Int!, $time:String!){
    addProduct(user_id:$userID, title:$title, categories:$categories, description:$description, price:$price, rent:$rent, time:$time) {
      id
      user_id
      title
      categories
      description 
      price
    }
  }
`
const DELETE_PRODUCT = gql`
  mutation deleteProduct($id:ID!,$userID:Int!){
    deleteProduct(id:$id, user_id:$userID){
        title
        categories
    }
  }

`

const UPDATE_PRODUCT = gql`
 mutation updateProduct($id:ID!,$userID:Int!, $title:String!, $categories:String!, $description:String!, $price:Int!, $rent:Int!, $time:String!){
  updateProduct(id:$id, user_id:$userID, title:$title, categories:$categories, description:$description, price:$price, rent:$rent, time:$time) {
    id
    user_id
    title
    categories
    description 
    price
    rent 
    time
  }
 }

`
const BUY = gql`
 mutation buy($productID:Int!, $userID:Int!, $productName:String!, $actionBuy:String!){
     buy(product_id:$productID, user_id:$userID, product_name:$productName, action:$actionBuy){
      id
      product_name
      action
     }
 }

`

const RENT = gql`
 mutation rent($productID:Int!, $userID:Int!, $productName:String!, $actionRent:String!, $rentTime:String!){
     rent(product_id:$productID, user_id:$userID, product_name:$productName, action:$actionRent, time:$rentTime){
      id
      product_name
      action
     }
 }

`


export { LOGIN_USER, REGISTER_USER, ADD_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT, BUY, RENT }