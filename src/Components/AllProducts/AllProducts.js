import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './AllProducts.css'

const AllProducts = () => {
    const [products ,setProducts]=useState([]);
    const [cart, setCart]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleCart=(product)=>{
        const addedCardItems=[...cart,product]
        setCart(addedCardItems);
   
    }
    return (
        <div className='body-container'>
            <div className="products-container">
                {
                    products.map(product=> <Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }
            </div>
            
            <div className="cart-container">
                {
                    <Cart cart={cart}></Cart>
                }
            </div>
        </div>
    );
};

export default AllProducts;