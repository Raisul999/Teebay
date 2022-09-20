import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../../mutations/userMutations';
import MultiSelect from 'react-multiple-select-dropdown-lite';
import {useNavigate} from 'react-router-dom';
import 'react-multiple-select-dropdown-lite/dist/index.css';
const AddProduct = () => {
    const navigate= useNavigate()
    const [categories, setCategories] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [rent, setRent] = useState('')
    const [time, setTime] = useState('')
    const user = JSON.parse(localStorage.getItem('user'))
    const userID = Number(user.id)
    const [addProduct,{ error}] = useMutation(ADD_PRODUCT, {
        variables: { userID, title, categories, description, price, rent, time },
    })

    const handleOnchange = (val) => {
        setCategories(val)
    }



    const options = [
        { label: 'ELECTRONICS', value: 'ELECTRONICS' },
        { label: 'FURNITURE', value: 'FURNITURE' },
        { label: 'HOME APPLIANCES', value: 'HOME APPLIANCES' },
        { label: 'SPORTING GOODS', value: 'SPORTING GOODS' },
        { label: 'OUTDOOR', value: 'OUTDOOR' },
        { label: 'TOYS', value: 'TOYS' },
    ]

    const handleAddProduct=()=>{
        if(title===''||categories===''|| description===''|| price===''|| rent===''|| time===''){
            alert('Please fill in all the fileds')
            return;
        }

        addProduct(userID, title, categories, description, price, rent, time )
        if(!error){
            navigate('/myProducts')
            window.location.reload()
        }
    }
    console.log(categories, title, description, price, rent, time)
    console.log(userID)
    return (
        <>
            <div className='container py-5 h-100'>
                <div className='row justify-content-center align-items-center h-60'>
                    <div className="col-12 col-lg-9 col-xl-7">
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
                                    <div className="col-lg-3 col-sm-12 ">
                                        <div className="form-outline">
                                            <label className="form-label">Categories</label>
                                            <MultiSelect className="col-12"
                                                onChange={handleOnchange}
                                                options={options}
                                            />
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
                                    <div className="col-lg-2 col-sm-12">
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
                                  onClick={handleAddProduct}
                                >
                                    Add 
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct
