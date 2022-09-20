import { gql } from '@apollo/client';

const GET_MYPRODUCTS = gql`
  query userProducts($userID:Int!) {
    userProducts(id: $userID){
      id
    user_id
    description
    title
    categories
    price
    rent
    time
    }
  }
`;

const USER_PRODUCT = gql`
  query userProduct($id:ID!,$userID:Int!) {
    userProduct(id:$id, user_id:$userID){
      id
    user_id
    description
    title
    categories
    price
    rent
    time
    }
  }
`;


export {GET_MYPRODUCTS, USER_PRODUCT}