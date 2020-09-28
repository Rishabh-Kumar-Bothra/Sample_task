import React from "react";
import  Row  from "react-bootstrap/Row";

import Category from "./Category";
function CategoryList(props){
    function showCategory(id){
        props.showCategory(id);
    }
    return(
        <Row className="justify-content-md-center">
            {props.list.map(data =>(
                <Category key={data.category_id} id={data.category_id} info={data} showCategory={showCategory} />
            ))}
        </Row>
    )
}

export default CategoryList;