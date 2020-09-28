import React from "react";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import './Product.css';

function Product(props){
    console.log(props.info);
    return(
        <Col md="auto" className="container">
            <Card>
                <Card.Img src={props.info.image_urls.x120} alt="product"/>
                <Card.Body>
                    {/* <Card.Title className="break-word">{props.info.name}</Card.Title> */}
                    {/* <div>
                        <span className="break-word">{props.info.name}</span>
                    </div> */}
                    <h6>&#8377; {props.info.final_price}</h6>
                    <h6 className="oldPrice">&#8377; {props.info.price}</h6>
                    {props.info.is_in_stock ? 
                    <Button variant="outline-success">Add to cart</Button> : 
                    <Button variant="secondary">Out of stock</Button>}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Product