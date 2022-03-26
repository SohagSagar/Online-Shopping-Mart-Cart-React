import React from 'react';
import './Cart.css';

import DisplayCartItems from '../DisplayCardItems/DisplayCartItems';

const Cart = ({cart}) => {
    let addedIteams=cart;
    return (
        <div>
            <div className="cart-heading">
                    <p>Added Items<sup className='item-count'>{cart.length}</sup></p><hr />
                </div>

                <div className="added-items-details">
                    {
                        addedIteams.map(iteam=> <DisplayCartItems key={iteam.id} addedIteams={iteam}></DisplayCartItems>)
                        
                    }
                </div>

                <div className="cart-btn">
                    <button className='btn btn-outline-secondary'>Get Random Product</button>
                    <button className='btn btn-outline-danger'>Empty Cart</button>
                </div>
        </div>
    );
};

export default Cart;