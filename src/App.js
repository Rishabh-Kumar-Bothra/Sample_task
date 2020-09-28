import React, { useEffect } from 'react';
import './App.css';

import ProductList from "./components/ProductList";
import Category from './components/Category';


function App() {

  useEffect(()=>{
    fetch("https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=226")
      .then((res)=>{
        console.log("res",res);
        // res.json()
      })
      .then((data)=>{
        console.log("data",data);
      })
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ustra</h1>
      </header>
      <Category />
      <ProductList />
    </div>
  );
}

export default App;
