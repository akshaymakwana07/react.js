
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

function FetchData() {
  const [data, setData] = useState([]);
  const [editPost, setEditPost] = useState({ id: '', title: '', body: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        let res = await axios.get('http://localhost:9000/posts');
        setData(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/posts/${id}`);
      setData(data.filter(el => el.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (post) => {
    setEditPost(post);
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setEditPost({ ...editPost, [event.target.name]: event.target.value });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:9000/posts/${editPost.id}`, editPost);
      setData(data.map(el => (el.id === editPost.id ? editPost : el)));
      setIsEditing(false);
      setEditPost({ id: '', title: '', body: '' });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='main'>
      <h3>Show Data</h3>
      <br />
      <table id='table' className="table" style={{ border: "2px solid black" }}>
        <thead>
          <tr style={{ border: "2px solid black" }}>
            <th style={{ border: "2px solid black" }} scope="col">No.</th>
            <th style={{ border: "2px solid black" }} scope="col">Title</th>
            <th style={{ border: "2px solid black" }} scope="col">Body</th>
            <th style={{ border: "2px solid black" }} scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el) => (
            <tr key={el.id}>
              <th style={{ border: "2px solid black" }} scope="row">{el.id}</th>
              <td style={{ border: "2px solid black" }}>{el.title}</td>
              <td style={{ border: "2px solid black" }}>{el.body}</td>
              <td style={{ border: "2px solid black", color: "red" }}>
                <RiDeleteBin6Line onClick={() => handleDelete(el.id)} />
                <FiEdit onClick={() => handleEdit(el)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditing && (
        <div>
          <h3>Edit Post</h3>
          <form onSubmit={handleUpdate}>
            <label>
              Title:
              <input
                type='text'
                name='title'
                onChange={handleChange}
                value={editPost.title}
              />
            </label>
            <br />
            <label>
              Body:
              <input
                type='text'
                name='body'
                onChange={handleChange}
                value={editPost.body}
              />
            </label>
            <br /><br />
            <button type='submit'>Update</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default FetchData;
