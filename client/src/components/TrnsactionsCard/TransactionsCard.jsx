

const TransactionsCard = ({product}) => {
    return (
        <>
            <div className='container py-3 h-100'>
                <div className='row justify-content-center align-items-center h-60'>
                    <div className="col-12 col-lg-9 col-xl-7">
                        <div className="card shadow-2-strong">
                            <div className="card-body p-4 p-md-5">
                                <div className='d-flex justify-content-between p-8 text-grey'>
                                    <div className='title'>{product.product_name}</div>

                                </div>
                                <div className='d-flex justify-content-between mt-4 text-silver'>
                                    <div>Status:<span className='text-uppercase'>{product.action}</span></div>

                                </div>

                                {/* <div className='d-flex justify-content-between mt-2 text-silver'>
                                    <div>Price: ${product.price} | Rent: ${product.rent} {product.time}</div>
                                </div>

                                <div className='d-flex justify-content-between mt-4 text-grey'>
                                    <div>{product.description}</div>
                                </div>
                                */}
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TransactionsCard
