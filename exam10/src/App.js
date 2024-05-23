
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductPage from './ProdectPage'
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [prodect, setProdect] = useState([])

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

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home prodect={prodect} />} />
          <Route path="/add" element={<ProductPage addnewProdect={addnewProdect} />} /> {/* Fix prop name here */}
          {/* <Route path="/edit/:id"></Route> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
