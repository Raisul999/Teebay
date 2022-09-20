import { gql } from '@apollo/client';

const GET_ALLTRANSACTIONS = gql`
  query allTransactions{
    allTransactions{
        id
        product_id
        user_id
        product_name
        action
        time
    }
  }

`
export {GET_ALLTRANSACTIONS}