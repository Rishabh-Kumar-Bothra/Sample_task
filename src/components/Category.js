import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import './Category.css';
function Category(props){

    function category_data(){
        props.showCategory(props.id);
    }

    return(
        <Col md="auto" className="container" id={props.id} onClick={category_data} sm>
            <Image className="image" src={props.info.category_image} alt="category" rounded />
            <h4 className="centered">{props.info.category_name}</h4>
        </Col>
        
    )
}

export default Category;