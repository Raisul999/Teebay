import React, { useEffect, useState } from 'react';
import { useMutation, useLazyQuery } from '@apollo/client';
import { UPDATE_PRODUCT} from '../../mutations/userMutations';
import { USER_PRODUCT } from '../../queries/userQueries';
import MultiSelect from 'react-multiple-select-dropdown-lite';
import { useParams, useNavigate } from 'react-router-dom';
import 'react-multiple-select-dropdown-lite/dist/index.css';
// import Select from 'react-select';
const EditProduct = () => {
    const navigate = useNavigate()
    const params = useParams()
    let id = Number(params.id);
    let userID=Number(JSON.parse(localStorage.getItem('user')).id);
    const [product] = useLazyQuery(USER_PRODUCT,{
        variables:{id, userID}
    })

    const [categories, setCategories] = useState()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [rent, setRent] = useState('')
    const [time, setTime] = useState()

    useEffect(()=>{
        const result = product()
        result.then(res=>{
            setTitle(res.data.userProduct.title)
            setDescription(res.data.userProduct.description)
            setPrice(res.data.userProduct.price)
            setRent(res.data.userProduct.rent)
            setCategories(res.data.userProduct.categories)
            setTime(res.data.userProduct.time)
        })
    },[])
   
    
    // console.log(params.id)
    // console.log(data)
    // console.log(userID)
    // const id = product.id
    // console.log(product.id)

   
   
    const [updateProduct] = useMutation(UPDATE_PRODUCT, {
        variables: {id, userID, title, categories, description, price, rent, time }
    })

    const handleOnchange = (val) => {
        setCategories(val)
    }

    const options = [
        { value: 'ELECTRONICS', label: 'ELECTRONICS' },
        { value: 'FURNITURE', label: 'FURNITURE' },
        { value: 'HOME APPLIANCES', label: 'HOME APPLIANCES' },
        { value: 'SPORTING GOODS', label: 'SPORTING GOODS' },
        { value: 'OUTDOOR', label: 'OUTDOOR' },
        { value: 'TOYS', label: 'TOYS' },
    ]

    const handleUpdateProduct = () => {
        if (title === '' || categories ==='' || description === '' || price === '' || rent === '' || time === '') {
            alert('Please fill in all the fileds')
            return;
        }

        updateProduct(id,userID, title, categories, description, price, rent, time)

        navigate('/myProducts')
        // window.location.reload();
    }
    return (
        <>
            <div className='container py-5 h-100'>
                <div className='row justify-content-center align-items-center h-60'>

                    <div className="card shadow-2-strong">
                        <div className="card-body p-4 p-md-5">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-outline">
                                        <label className="form-label">Title</label>
                                        <input type="text"
                                            value={title}
                                            className="form-control"
                                            onChange={(e) => setTitle(e.target.value)}
                                        />

                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-12 ">
                                    <div className="form-outline">
                                        <label className="form-label">Categories</label>
                                        <MultiSelect className="col-12"
                                            value={[categories]}
                                            onChange={handleOnchange}
                                            options={options}
                                        />
                                        {/* <Select
                                            value={categories}
                                            onChange={handleOnchange}
                                            options={options}
                                            isMulti={true}
                                        /> */}
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-outline">
                                        <label className="form-label" >Description</label>
                                        <textarea type="text"
                                            value={description}
                                            className="form-control"
                                            rows="5"
                                            onChange={(e) => setDescription(e.target.value)}
                                        >

                                        </textarea>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-sm-12">
                                    <div className="form-outline">
                                        <label className="form-label" >Price</label>
                                        <input type="text"
                                            value={price}
                                            className="form-control"

                                            onChange={(e) => setPrice(Number(e.target.value))}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-sm-12">
                                    <div className="form-outline">
                                        <label className="form-label" >Rent</label>
                                        <input type="text"
                                            value={rent}
                                            className="form-control"
                                            onChange={(e) => setRent(Number(e.target.value))}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-12">
                                    <div className="form-outline">
                                        <label className="form-label" >Select</label>
                                        <select className="form-select form-select-sm"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                        >
                                            <option value="per hour">per hour</option>
                                            <option value="per day">per day</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <button className='btn btn-primary position mt-4'
                                onClick={handleUpdateProduct}
                            >
                                Update
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default EditProduct
