import React from 'react';
import { BsCart4} from 'react-icons/bs';
import './Product.css'


const Product = ({product,handleCart}) => {
    // console.log(product);
    const {price, name, image, id}=product;
    return (
        <div className='cardbody'>
            <img className='card-image' src={image} alt="" />
            <div className="product-desc">
                <hr />
                <p>Name: {name}</p>
                <p>Price: ${price}</p>
                <button onClick={()=>handleCart(product)} className='btn btn-outline-secondary '>Add To Cart <BsCart4 id='cart-icon' /></button>
            </div>
        </div>
    );
};

export default Product;