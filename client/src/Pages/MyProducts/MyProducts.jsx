import ProductCard from '../../components/ProductCard/ProductCard';
import { GET_MYPRODUCTS } from '../../queries/userQueries';
import { useQuery } from '@apollo/client';
import Spinner from '../../components/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
const MyProducts = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    let userID
    if (!user) {
        navigate('/')

    } else {

        userID = Number(user.id)

    }


    const { data, error, loading } = useQuery(GET_MYPRODUCTS, {
        variables: { userID }
    })



    if (loading) {
        return <Spinner />
    }
    if (error) {
        return <p>Something Went Wrong</p>
    }
    return (
        <>
            {data.userProducts.length>0?<div>
                {user ? <div>
                    <h2 className='text-center'>My Products</h2>
                    <div className='d-flex justify-content-end p-4 m-4'>
                        <button className='btn btn-primary'
                            onClick={() => navigate('/addProduct')}>

                            Add Product
                        </button>
                    </div>
                    {data.userProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div> : <div>You are not authorized</div>}
            </div>:<div><h2 className='text-center'>You have added no products</h2></div>}

          
        </>
    )
}

export default MyProducts
