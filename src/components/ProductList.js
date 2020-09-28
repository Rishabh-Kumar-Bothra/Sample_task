import React from "react";

import Product from "./Product";

function ProductList(props){
    console.log(props.list);
    return(
        <div>
            {props.list.map(data =>(
                <Product key={data.id} id={data.id} info={data} />
            ))}
        </div>
    )
}

export default ProductList;