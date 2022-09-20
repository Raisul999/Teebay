import React from 'react'
import AllProductsCard from '../../components/AllProductsCard/AllProductsCard';
import { useQuery } from '@apollo/client';
import { GET_ALLPRODUCTS } from '../../queries/allProductsQueries';
import Spinner from '../../components/Spinner/Spinner';
const AllProducts = () => {
  const {data, error, loading} = useQuery(GET_ALLPRODUCTS);

  localStorage.setItem('allProducts', JSON.stringify(data));

   if(loading){
    return <Spinner/>
   }

   if(error){
     return <p>Something went wrong</p>
   }

  return (
    <div>
        {data.products.map((product, i)=>(
          <AllProductsCard
            key={i}
            product={product}
          />
        ))}
    </div>
  )
}

export default AllProducts
