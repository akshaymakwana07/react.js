
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductPage from './ProdectPage'
import Home from './Home'
import Editprodect from './Editprodect'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [prodect, setProdect] = useState([])
  const [prod, setProd] = useState ([])

  function addnewProdect(title, price, rating, description) {
    let newProduct = {
      id: new Date().getTime(),
      title: title,
      price: price,
      rating: rating,
      description: description
    }
    setProdect([...prodect, newProduct]) // Fix typo here
  }

  function deleteProdect(id){
    setProdect(prodect.filter((el)=>(
      el.id !==id
    )))
  }

  function editProdect(id,title,price,rating,description){
    let updatedProdect = prodect.map(prod => prod.id == id ? {...prod,id,title:title, price:price, rating:rating, description:description}:prod)
    setProd(updatedProdect)
  }

  console.log(prodect)
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home prodect={prodect} deleteProdect={deleteProdect}/>} />
          <Route path="/add" element={<ProductPage addnewProdect={addnewProdect} />} /> 
          <Route path="/edit/:id" element={<Editprodect editProdect={editProdect} prodect={prodect}/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
