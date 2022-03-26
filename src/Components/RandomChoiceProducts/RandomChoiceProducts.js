import React from 'react';
import './RandomChoiceProducts.css';
const RandomChoiceProducts = () => {
    return (
        
         <div>
             <div className="iteam-details">
                 {/* <img src= alt="" /> */}
                 <li>laptop</li>
                 <li>Price: $</li>
                 <button id='delete-item' className='btn btn-danger'>X</button>
            </div>
         </div>
        
    );
};

export default RandomChoiceProducts;