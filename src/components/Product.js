import React from "react";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import './Product.css';

function Product(props){
    return(
        <Col md="auto" className="container" sm>
            <h5>{props.info.name}</h5>
            <img src={props.info.image_urls.x120} alt="product"/>
            <h6>&#8377; {props.info.final_price}</h6>
            <h6 className="oldPrice">&#8377; {props.info.price}</h6>
            {props.info.is_in_stock ? 
            <Button variant="outline-success">Add to cart</Button> : 
            <Button variant="secondary">Out of stock</Button>}
        </Col>
    )
}

export default Product