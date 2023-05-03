import React, { useState } from 'react';
import { json } from 'react-router-dom';

const AddUser = () => {
    const [user,setUser] = useState({});
    const handleAddUser = event =>{
        event.preventDefault();
        console.log(user);
        fetch('http://localhost:5000/users',{
               method: 'POST',
               headers: {
                "content-type" : "application/json",
               },
               body : JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Data Successfully Addded');
                event.target.reset();
            }
            console.log(data)
        })

    }
    const handleInputBlur = event =>{
         const value = event.target.value;
         const feild = event.target.name; 
         const newUser = {...user}
         newUser[feild] = value;
         setUser(newUser);
    }
    return (
        <div>
            <h1>Pleased add user</h1>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} name='name' type="text" placeholder='Name'/>
                <br/>
                <input onBlur={handleInputBlur} name='address' type="text" placeholder='address'/>
                <br />
                <input onBlur={handleInputBlur} type="email" name='email' placeholder='Email' />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;