import React, { useState } from 'react';
import './Cart.css';

import DisplayCartItems from '../DisplayCardItems/DisplayCartItems';
import RandomChoiceProducts from '../RandomChoiceProducts/RandomChoiceProducts';

const Cart = ({cart}) => {
    let addedIteams=cart;
    const [randomItems,setRandomItems]=useState([]);

    const randomChoiceBtn=()=>{
        const randomItems = addedIteams[Math.floor(Math.random()*addedIteams.length)];
        
        setRandomItems(randomItems);
    }
    console.log(randomItems);
    return (
        <div>
            <div className="cart-heading">
                    <p>Added Items<sup className='item-count'>{cart.length}</sup></p><hr />
                </div>

                <div className="added-items-details">
                    {
                        addedIteams.map(iteam=> <DisplayCartItems key={iteam.id} addedIteams={iteam}></DisplayCartItems>)
                        
                    }
                </div><hr />

                <div>
                    
                    {
                        
                        randomItems.map(randomItem=><RandomChoiceProducts key={randomItem.id}></RandomChoiceProducts>)
                    }
                </div>

                <div className="cart-btn">
                    <button onClick={randomChoiceBtn} className='btn btn-outline-secondary'>Choice One For Me !!</button>
                    <button className='btn btn-outline-danger'>Empty Cart</button>
                </div>
        </div>
    );
};

export default Cart;