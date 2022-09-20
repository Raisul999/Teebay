import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { useMutation } from "@apollo/client";
import { BUY,RENT } from "../../mutations/userMutations";
import { useNavigate } from 'react-router-dom';
const AllProductsCard = ({ product }) => {
    // console.log(product)
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(window.location.search)
    const productID = Number(queryParams.get("id"))
    const productName = queryParams.get("name");
    const userID = Number(JSON.parse(localStorage.getItem('user')).id);
    const actionBuy = 'Bought'
    const actionRent = 'Rented'
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const rentTime = String((endDate.getDate() - startDate.getDate()))
    let start = moment(startDate).format('DD/MM/YYYY')
    let end = moment(endDate).format('DD/MM/YYYY')

    const appendID = (id, name) => {
        // setId(id);
        navigate({
            search: `id=${id}&name=${name}`
        })
    }
  
    const [buyProduct] = useMutation(BUY, {
         variables:{productID, userID, productName, actionBuy}
    })

    const [rentProduct] = useMutation(RENT, {
        variables:{productID, userID, productName, actionRent, rentTime}
    })
    
    const handleBuy = () =>{
       
        buyProduct(productID, userID, productName, actionBuy)
        alert('Bought successfully')
    }

    const handleRent = () => {
        console.log(productID)
        console.log(productName)
        if (start >= end) {
            alert('Start and End date must be different')
            return;
        }
        rentProduct(productID, userID, productName, actionRent, rentTime)
        alert('Rented successfully')
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

                                </div>
                                <div className='d-flex justify-content-between mt-4 text-silver'>
                                    <div>Categories:{product.categories}</div>

                                </div>

                                <div className='d-flex justify-content-between mt-2 text-silver'>
                                    <div>Price: ${product.price} | Rent: ${product.rent} {product.time}</div>
                                </div>

                                <div className='d-flex justify-content-between mt-4 text-grey'>
                                    <div>{product.description}</div>
                                </div>
                                <div className='d-flex justify-content-end mt-4 text-grey'>
                                    <div className="mx-2">
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#buyProductModal" onClick={() => appendID(product.id, product.title)}>
                                            <div className="d-flex align-items-center">
                                                Buy
                                            </div>
                                        </button>
                                    </div>
                                    <div className="modal fade" id="buyProductModal" aria-labelledby="buyProductModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                                <div className="modal-body">
                                                    <div className='container row h-100'>
                                                        <div className='m-4'>
                                                            <div className='p-8'>
                                                                Are you sure you want to buy this product?
                                                            </div>

                                                        </div>
                                                    </div>


                                                </div>
                                                <div className='d-flex justify-content-end p-4'>
                                                    <button className="btn btn-secondary mx-2" data-bs-dismiss="modal">No</button>
                                                    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleBuy} >Yes</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="mx-2">
                                        <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#rentProductModal" onClick={() => appendID(product.id, product.title)} >
                                            <div className="d-flex align-items-center">
                                                Rent
                                            </div>
                                        </button>
                                    </div>

                                    <div className="modal fade" id="rentProductModal" aria-labelledby="rentProductModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">

                                                <div className="modal-body">
                                                    <h2 className='my-4'>Rental Period</h2>
                                                    <div className='container row h-100'>
                                                        <div className='d-flex justiyfy-content-center align-items-between'>
                                                            <div>
                                                                <label>From</label>
                                                                <DatePicker
                                                                    selected={startDate}
                                                                    onChange={(date) => setStartDate(date)}
                                                                    minDate={startDate}
                                                                    maxDate={endDate}
                                                                />
                                                            </div>
                                                            <div>
                                                                <label>To</label>
                                                                <DatePicker
                                                                    selected={endDate}
                                                                    onChange={(date) => setEndDate(date)}
                                                                    minDate={startDate}
                                                                />
                                                            </div>

                                                        </div>
                                                    </div>


                                                </div>
                                                <div className='d-flex justify-content-end p-4'>
                                                    <button className="btn btn-secondary mx-2" data-bs-dismiss="modal">Go Back</button>
                                                    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleRent} >Confirm Rent</button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllProductsCard
