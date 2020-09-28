import React from "react";
import './Category.css';
function Category(props){

    function category_data(){
        props.showCategory(props.id);
    }

    return(
        <div className="container" id={props.id} onClick={category_data}>
            <img src={props.info.category_image} alt="category" />
            <h2 className="centered">{props.info.category_name}</h2>
        </div>
        
    )
}

export default Category;