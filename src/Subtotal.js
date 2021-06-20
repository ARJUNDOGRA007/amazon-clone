import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from './reducer';
import { useHistory } from "react-router-dom";

function Subtotal() {

    const history = useHistory();
    
    const [{ basket ,user},dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <React.Fragment>
                        <p>
                            Subtotal ({basket.length} items) :<strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This order contains a gift
                        </small>
                    </React.Fragment>

                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rs "}

            />
            {/* Before proceeding to checkout, it should we mde sure that the user has logged in so that the order 
            can be later linked to his account. */}
            {/* The Statement below checks if the user exsists, if yes clicking then the button redirects the user to the 
            payment page else the Sign-in alert pops up. */}
            <button onClick={e => (user)? history.push("/payment") : alert("Before placing the order, please sign in !") }>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
