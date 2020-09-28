import React, { useEffect, useState } from 'react';
import './App.css';

import ProductList from "./components/ProductList";
import CategoryList from './components/CategoryList';

function App() {
  const [ categoryList, setCategoryList ] = useState([]);
  const [ productList, setProductList ] = useState([]);


  useEffect(()=>{

    fetch("https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob")
      .then(res => res.json())
      .then((data)=>{
        console.log("data",data);
        setCategoryList(data.category_list);
        setProductList(data.product_list.products);
      })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ustra</h1>
      </header>
      <CategoryList list={categoryList} />
      <ProductList list={productList} />
    </div>
  );
}

export default App;
