import React from "react";

import Category from "./Category";
function CategoryList(props){
    return(
        <div>
            {props.list.map(data =>(
                <Category key={data.category_id} id={data.category_id} info={data} />
            ))}
        </div>
    )
}

export default CategoryList;