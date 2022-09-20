import { FaTrash } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi'
import { DELETE_PRODUCT } from '../../mutations/userMutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(window.location.search)
    const id = queryParams.get("id")
    // const location = queryParams.get("location")

    // const [id, setId] = useSearchParams()
    const user = JSON.parse(localStorage.getItem('user'))
    const userID = Number(user.id)

    const appendID = (id) => {
        // setId(id);
        navigate({
            pathname: '/myProducts',
            search: `id=${id}`
        })
    }

    const appendUpdate = (id) => {
        navigate(`/editProduct/${id}`)
    }

    // console.log(id)
    
    const [deleteProduct] = useMutation(DELETE_PRODUCT, {
        variables: { id, userID }
        // refetchQueries: [{ query: GET_MYPRODUCTS }]

    })
    const handleDeleteProduct = () => {
        // console.log(id);
        deleteProduct(id, userID)
        // window.location.reload()
    }


    return (
        <>
            <div className='container py-3 h-100'>
                <div className='row justify-content-center align-items-center h-60'>
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-4 p-md-5">
                                <div className='d-flex justify-content-between p-8 text-grey'>
                                    <div className='title'>{product.title}</div>
                                    <div className='icon'
                                    >
                                        <button type="button" className="btn btn-spec" data-bs-toggle="modal" data-bs-target="#deteleProductModal" onClick={() => appendID(product.id)}>
                                            <div className="d-flex align-items-center">
                                                <FaTrash className='icon' />
                                            </div>
                                        </button>

                                        <div className="modal fade" id="deteleProductModal" aria-labelledby="deteleProductModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">

                                                    <div className="modal-body">
                                                        <div className='container row h-100'>
                                                            <div className='m-4'>
                                                                <div className='p-8'>
                                                                    Are you sure you want to delete this product?
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div className='d-flex justify-content-end p-4'>
                                                        <button className="btn btn-secondary mx-2" data-bs-dismiss="modal">No</button>
                                                        <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleDeleteProduct}>Yes</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='d-flex justify-content-between mt-4 text-silver'>
                                    <div>Categories:{product.categories}</div>

                                    <div className='icon' onClick={() => appendUpdate(product.id)}>
                                        <FiEdit/>
                                    </div>
                                </div>

                                <div className='d-flex justify-content-between mt-2 text-silver'>
                                    <div>Price: ${product.price} | Rent: ${product.rent} {product.time}</div>
                                </div>

                                <div className='d-flex justify-content-between mt-4 text-grey'>
                                    <div>{product.description}</div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductCard
