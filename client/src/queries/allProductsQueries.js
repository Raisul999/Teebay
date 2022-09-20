import { gql } from '@apollo/client';

const GET_ALLPRODUCTS = gql`
  query products {
    products{
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

export {GET_ALLPRODUCTS}