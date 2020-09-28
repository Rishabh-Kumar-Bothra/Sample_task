import React from "react";
import './Product.css'

function Product(props){
    console.log(props.info.final_price)
    return(
        <div>
            <h2>{props.info.name}</h2>
            <h4>&#8377; {props.info.final_price}</h4>
            <h6 className="oldPrice">&#8377; {props.info.price}</h6>
            {props.info.is_in_stock ? <button>Add to cart</button> : <button>Out of stock</button>}
        </div>
    )
}

export default Product