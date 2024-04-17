import logo from './logo.svg';
import './App.css';
import Prodect from './Prodect';
import { useState, useEffect } from 'react';

function App() {

  const [data,setData] = useState(null)

  useEffect(()=>{
    const fechdeta = async ()=>{
      let respons = await fetch ('https://fakestoreapi.com/products')
      let jsondata = await respons.json()
      setData(jsondata)
      console.log(data)
    }
    fechdeta()
  },[])
  
  return (
   <Prodect data={data}/>
  );
}

export default App;
