import React from "react";
import  Row  from "react-bootstrap/Row";


import Product from "./Product";

function ProductList(props){
    return(
        <Row className="justify-content-md-center">
            {props.list.map(data =>(
                <Product key={data.id} id={data.id} info={data} />
            ))}
        </Row>
    )
}

export default ProductList;