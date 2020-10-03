import React, { useEffect, useState } from 'react';
import Fuse from "fuse.js";
import './App.css';

import Hotels from "./Hotels";
import Data from "./data.json";

function App() {
  const [ data, setData ] = useState([]);

  useEffect(()=>{
    setData(() => Data);
    console.log("cehck", Data);
  },[])

  var fuse = new Fuse(Data,{
    keys:[
      'name',
      'description'
    ]
  })

  let Hotel = data.map((item)=>{
    return <Hotels key={item.id} info={item} />
  })

  function HandleChange(event){
    let results = fuse.search(event.target.value);
    let finalResults = results.map(result => result.item);
    if(!event.target.value){
      finalResults = Data;
    }
    setData(() => finalResults);

  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>Hotels App</h3>
        <input type="text" placeholder="  search.." onChange={HandleChange} />
      </header>
      <div className="Wrapper">
        {Hotel}
      </div>
    </div>
  );
}

export default App;
