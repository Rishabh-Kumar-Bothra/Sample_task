import React from "react";

import Category from "./Category";
function CategoryList(props){
    function showCategory(id){
        props.showCategory(id);
    }
    return(
        <div>
            {props.list.map(data =>(
                <Category key={data.category_id} id={data.category_id} info={data} showCategory={showCategory} />
            ))}
        </div>
    )
}

export default CategoryList;