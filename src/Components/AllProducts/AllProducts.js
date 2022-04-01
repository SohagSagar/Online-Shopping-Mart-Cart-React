import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './AllProducts.css'

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleCart = (product) => {
        const exist = cart.find(item => item.id === product.id);
        if (!exist) {
            const addedCardItems = [...cart, product];
            if (addedCardItems.length === 6) {
                alert('Maximun five items are allowed in cart !!')
            } else {

                setCart(addedCardItems);
            }
        }
        else{
            alert('Item is Already Added In Cart !!')
        }


    }
    // console.log(cart);
    const randomChoiceBtn = () => {
        if (cart.length > 0) {
            const randomItems = cart[Math.floor(Math.random() * cart.length)];
            const newRandomItems = [randomItems];
            // setNewRandomItems(newRandomItems);
            setCart(newRandomItems)
        }

    }
    const emptyFullCart = () => {
        setCart([])
    }

    const removeSingleItemFromCart = (addedIteams) => {
        const remainingItemInCart = cart.filter(item => item.id !== addedIteams.id);
        setCart(remainingItemInCart);
    }
    return (
        <div className='body-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }
            </div>

            <div className="cart-container">
                {
                    <Cart cart={cart} emptyFullCart={emptyFullCart} randomChoiceBtn={randomChoiceBtn} removeSingleItemFromCart={removeSingleItemFromCart}></Cart>
                }
            </div>
        </div>
    );
};

export default AllProducts;