import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './AllProducts.css'

const AllProducts = () => {
    const [products ,setProducts]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleCart=(product)=>{
        console.log(product);
    }
    return (
        <div className='body-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }
            </div>

            <div className="cart-container">
                <div className="cart-heading">
                    <p>Added Items</p><hr />
                </div>

                <div className="cart-btn">
                    <button className='btn btn-outline-secondary'>Get Random Product</button>
                    <button className='btn btn-outline-danger'>Empty Cart</button>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;