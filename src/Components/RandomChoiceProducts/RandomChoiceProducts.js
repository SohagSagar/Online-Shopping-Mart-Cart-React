import React from 'react';
import './RandomChoiceProducts.css';
const RandomChoiceProducts = ({randomItem}) => {
    const {image, name, price}=randomItem;
    console.log(randomItem);
    return (
        
         <div>
             <p className='chose-item-heading'>Chose Item</p><hr />
             <div className="iteam-details">
                 <img src={image} alt="" />
                 <li>{name}</li>
                 <li>Price: ${price}</li>
                 <button id='delete-item' className='btn btn-danger'>X</button>
            </div>
         </div>
        
    );
};

export default RandomChoiceProducts;