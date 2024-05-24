import { useState } from "react"
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


function Editprodect(editprodect,prodect) {
    const{id} = useParams()

    let ans = prodect.find(prod=>prod.id === parseInt(id))
    const [title,setTitle] = useState (ans.title)
    const [price,setPrice] = useState(ans.price)
    const [rating,setRating] = useState(ans.rating)
    const [description,setDescription] = useState(ans.description)

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        editprodect(ans.id, title, price,rating, description)
        navigate('/')
    }
    
  return (
    <div>
       <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-sm-6">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="form-control"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-6">
            <label htmlFor="rating" className="form-label">Rating</label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="form-control"
              min="1"
              max="5"
              step="0.1"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Create
        </button>
      </form>

      <Link to ="/">BACK TO HOME</Link>
    </div>
  )
}

export default Editprodect
