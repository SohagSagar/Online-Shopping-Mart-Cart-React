import React from 'react';
import './DisplayCartItems.css'


const DisplayCartItems = ({addedIteams,removeSingleItemFromCart}) => {
    const {image, name, price}=addedIteams;
    return (
        <div>
            <div className="iteam-details">
                <img src={image} alt="" />
                <li>{name}</li>
                <li>Price: ${price}</li>
                <button onClick={()=>removeSingleItemFromCart(addedIteams)} id='delete-item' className='btn btn-danger'>X</button>
            </div>
        </div>
    );
};

export default DisplayCartItems;