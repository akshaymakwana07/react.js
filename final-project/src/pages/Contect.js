
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import '../Styles/Contectstyle.css'
import Banner from "../images/banner.jpeg"
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { database } from '../Firebase'; 
import { ref, set, remove, onValue } from "firebase/database";

const Contact = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const usersRef = ref(database, 'users');
    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const userList = Object.keys(data).map((key) => ({
          name: key,
          ...data[key]
        }));
        setUsers(userList);
      } else {
        setUsers([]);
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      alert("Please fill in both fields");
      return;
    }

    const newUserRef = ref(database, `users/${name}`);
    set(newUserRef, { name, password })
      .then(() => {
        alert("User registered successfully");
        setName("");
        setPassword("");
        setUpdate(false);
      })
      .catch((error) => {
        alert("Error registering user: " + error.message);
      });
  };

  const handleDelete = (userName) => {
    const newUserRef = ref(database, `users/${userName}`);
    remove(newUserRef)
      .then(() => {
        alert("User deleted successfully");
      })
      .catch((error) => {
        alert("Error deleting user: " + error.message);
      });
  };

  const handleUpdate = (user) => {
    setName(user.name);
    setPassword(user.password);
    setUpdate(true);
  };

  return (
    <Layout>
      <div className='main' style={{backgroundImage:`url(${Banner})`}}>
      <Box sx={{ p:5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4" sx={{color:"white"}}>Contact My Restaurant</Typography>
        <p className='font-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem odio <br/>
          beatae ducimus magni nobis culpa praesentium velit expedita quae,<br/>
          corrupti, pariatur inventore laboriosam consectetur modi impedit<br/>
          error, repudiandae obcaecati doloribus.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
                
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> akshaymakwana2739.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 9558099011
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
        </TableContainer>
        
      
      </Box>

      <div className='contact'>
        <form onSubmit={handleSubmit}>
          <h1>Registration Form</h1>
          <input
            className='input'
            placeholder='Enter User Name'
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='input'
            placeholder='Enter your Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='btn1' type='submit'>
            {update ? "Update" : "Submit"}
          </button>
        </form>
        {/* <div>
          <h1>Registered Users</h1>
          <ul>
            {users.map((user) => (
              <li key={user.name}>
                <h2>Name: {user.name}</h2>
                <button id='btn1' onClick={() => handleDelete(user.name)}>
                  DELETE
                </button>
                <button id='btn2' onClick={() => handleUpdate(user)}>
                  UPDATE
                </button>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
      </div>
    </Layout>
  );
};

export default Contact;
