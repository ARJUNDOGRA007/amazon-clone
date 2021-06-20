import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,title,price,rating,hideButton}) {

    const[{basket},dispatch] = useStateValue();

    const removeFromBasket = () =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                
                <p className="checkoutProduct__price">
                    <small>Rs. </small>
                    <strong>{price}</strong>
                </p>

                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                     .map((_,i) => ( //here the '_' represents that we dont care about the value in the first parameter
                        <p>⭐</p>    //and the 'i' in the parameter list is just a iterator to parse over the array elements
                    ))}
                </div>
                
                {!hideButton && <button onClick={removeFromBasket}>Remove from Cart</button>}
                
            </div>

        </div>
    )
}

export default CheckoutProduct 
