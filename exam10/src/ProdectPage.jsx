import React, { useState } from 'react';
import {Link , useNavigate} from 'react-router-dom'


 function ProductPage ({addnewProdect}) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault();
    addnewProdect(title, price, rating, description)
    navigate('/')
    
    console.log({ title, price, rating, description });
  };

  return (
    
    <div className="container mt-4">
      <h1 className="mb-4">Create Product</h1>
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
      
    </div>
  );
};

export default ProductPage;