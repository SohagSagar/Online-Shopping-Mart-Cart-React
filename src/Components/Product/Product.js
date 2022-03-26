import React from 'react';
import './Product.css'


const Product = ({product}) => {
    console.log(product);
    const {price, name, image}=product
    return (
        <div className='cardbody'>
            <img className='card-image' src={image} alt="" />
            <div className="product-desc">
                <hr />
                <p>Name: {name}</p>
                <p>Price: ${price}</p>
                <button className='btn btn-outline-secondary '>Add To Cart<i className="bi bi-cart-check"></i></button>
            </div>
        </div>
    );
};

export default Product;