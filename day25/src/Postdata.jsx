

import React, { useState } from 'react';
import axios from 'axios';

function Postdata() {
  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  const handleChange = (event) => {
    console.log('Handle Change:', event.target.name, event.target.value);
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting Post:', post);
    axios.post('http://localhost:8000/posts', post)
      .then((res) => {
        console.log('Response:', res);
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type='text' name='title' onChange={handleChange} value={post.title} />
        </label>
        <br />
        <label>
          Post:
          <input type='text' name='body' onChange={handleChange} value={post.body} />
        </label>
        <br /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Postdata;

