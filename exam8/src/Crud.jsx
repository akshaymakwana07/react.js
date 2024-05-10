
import React, { useState } from 'react';

function Crud() {
    const [frmvalue, setFrmvalue] = useState({
        'Name': '',
        'Email': '',
        'Number': '',
        'Password': ''
    });

    const [frm, setFrm] = useState([]);
    const [editId, setEditId] = useState(null);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setFrmvalue({
            ...frmvalue,
            [name]: value
        });
    }

    const addFrm = (e) => {
        e.preventDefault();
        setFrm([...frm, frmvalue]);
        setFrmvalue({
            'Name': '',
            'Email': '',
            'Number': '',
            'Password': ''
        }); 
    }

    function deletefrm(index) {
        setFrm(frm.filter((_, i) => i !== index));
    }

    function editfrm(index) {
        setEditId(index);
        setFrmvalue(frm[index]);
    }

    function saveEdit(index) {
        setFrm([
            ...frm.slice(0, index),
            frmvalue,
            ...frm.slice(index + 1)
        ]);
        setEditId(null);
        setFrmvalue({
            'Name': '',
            'Email': '',
            'Number': '',
            'Password': ''
        });
    }

    return (
        <div>
            <center>
                <label>Enter Your Name</label> <br />
                <input
                    type='text'
                    name='Name'
                    placeholder='Your Name'
                    value={frmvalue.Name}
                    onChange={handleInput}
                /><br /><br />

                <label>Enter Your email</label> <br />
                <input
                    type='email'
                    name='Email'
                    value={frmvalue.Email}
                    onChange={handleInput}
                /><br /><br />

                <label>Enter Your Number</label> <br />
                <input
                    type='number'
                    name='Number'
                    value={frmvalue.Number}
                    onChange={handleInput}
                /><br /><br />

                <label>Enter Your Password</label> <br />
                <input
                    type='password'
                    name='Password'
                    value={frmvalue.Password}
                    onChange={handleInput}
                /><br /><br />

                <button onClick={addFrm}>Submit</button>

                {
                    frm.map((el, index) => (
                        <div key={index}>
                            <table border={1}>
                                <tr>
                                    <td>{el.Name}</td>
                                    <td>{el.Email}</td>
                                    <td>{el.Number}</td>
                                    <td>{el.Password}</td>
                                    <td>
                                        <button onClick={() => deletefrm(index)}>Delete</button>
                                        <button onClick={() => editfrm(index)}>Edit</button>
                                        {editId === index &&
                                            <button onClick={() => saveEdit(index)}>Save</button>
                                        }
                                    </td>
                                </tr>
                            </table>
                        </div>
                    ))
                }
            </center>
        </div>
    );
}

export default Crud;


