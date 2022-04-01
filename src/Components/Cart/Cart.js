import React, { useState } from 'react';
import './Cart.css';

import DisplayCartItems from '../DisplayCardItems/DisplayCartItems';
import RandomChoiceProducts from '../RandomChoiceProducts/RandomChoiceProducts';

const Cart = ({ cart, emptyFullCart, randomChoiceBtn, removeSingleItemFromCart }) => {
    let addedIteams = cart;

    // const [newRandomItems,setNewRandomItems]=useState([]);

    // const randomChoiceBtn=()=>{
    //     const randomItems = addedIteams[Math.floor(Math.random()*addedIteams.length)];
    //     const newRandomItems=[randomItems];
    //     setNewRandomItems(newRandomItems);
    // }

    // const a=true;
    // if(a===true){
    //     setNewRandomItems([]);
    // }

    return (
        <div>
            <div className="cart-heading">
                <p>Added Items<sup className='item-count'>{cart.length}</sup></p><hr />
            </div>

            <div className="added-items-details">
                {
                    addedIteams.map(iteam => <DisplayCartItems key={iteam.id} addedIteams={iteam} removeSingleItemFromCart={removeSingleItemFromCart}></DisplayCartItems>)
                }
            </div><hr />

            <div>

                {/* {
                        newRandomItems.map(randomItem=><RandomChoiceProducts key={randomItem.id} randomItem={randomItem} ></RandomChoiceProducts>)
                    } */}
            </div>

            {
                addedIteams.length > 0 ?
                    <>
                        <div className="cart-btn">
                            <button onClick={randomChoiceBtn} className='btn btn-outline-secondary'>Choose One For Me !!</button>
                            <button onClick={emptyFullCart} className='btn btn-outline-danger'>Empty Cart</button>
                        </div>
                    </>
                    : <p className='empty-cart'>Cart is empty !!</p>
            }
        </div>
    );
};

export default Cart;