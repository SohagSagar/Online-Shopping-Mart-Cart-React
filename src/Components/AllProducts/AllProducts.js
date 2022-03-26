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
        
        const addedCardItems=[...cart,product];
        if(addedCardItems.length===6){
            alert('Maximun five items are allowed in cart !!')
        }else{

            setCart(addedCardItems);
        }
        
    }
    // console.log(cart);
    const randomChoiceBtn=()=>{
        const randomItems = cart[Math.floor(Math.random()*cart.length)];
        const newRandomItems=[randomItems];
        // setNewRandomItems(newRandomItems);
        setCart(newRandomItems)
    }
    const removeCartItems=()=>{
        setCart([])
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
                    <Cart cart={cart} removeCartItems={removeCartItems} randomChoiceBtn={randomChoiceBtn}></Cart>
                }
            </div>
        </div>
    );
};

export default AllProducts;