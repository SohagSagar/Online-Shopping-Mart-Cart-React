import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './AllProducts.css'

const AllProducts = () => {
    const [products ,setProducts]=useState([]);
    const [cart, setCart]=useState([]);
    const [count1,setCount1]=useState(0)

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
   
    let count=0;
    const removeCartItems=()=>{
        setCount1(count+1)
        setCart([])
        console.log('get');
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
                    <Cart cart={cart} removeCartItems={removeCartItems} count={count1}></Cart>
                }
            </div>
        </div>
    );
};

export default AllProducts;