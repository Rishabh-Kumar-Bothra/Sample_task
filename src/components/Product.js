import React from "react";
import Button from 'react-bootstrap/Button';
import './Product.css';

function Product(props){
    console.log(props.info.final_price)
    return(
        <div>
            <h4>{props.info.name}</h4>
            <h5>&#8377; {props.info.final_price}</h5>
            <h6 className="oldPrice">&#8377; {props.info.price}</h6>
            {props.info.is_in_stock ? 
            <Button variant="outline-success">Add to cart</Button> : 
            <Button variant="secondary">Out of stock</Button>}
        </div>
    )
}

export default Product