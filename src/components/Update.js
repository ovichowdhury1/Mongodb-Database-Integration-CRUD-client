import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
       const storeUser =  useLoaderData();
       const [user,setUser] =   useState(storeUser);
       const handleUpdateUser = event =>{
           event.preventDefault();
        //    console.log(user);

        fetch(`http://localhost:5000/users/${storeUser._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount>0){
                alert('úpdated succefully');
                console.log(data);
            }
            
        })
          
   
       }
       const handleInputChange = event =>{
                    const value = event.target.value;
                    const feild = event.target.name; 
                    const newUser = {...user}
                    newUser[feild] = value;
                    setUser(newUser);
   }
    return (
        <div>
                <h1>please update: {storeUser.name}</h1>
                <form onSubmit={ handleUpdateUser}>
                        <input onChange={handleInputChange} defaultValue={storeUser.name} name='name' type="text" placeholder='Name'/>
                        <br/>
                        <input onChange={handleInputChange} defaultValue={storeUser.address} name='address' type="text" placeholder='address'/>
                        <br />
                        <input onChange={handleInputChange} defaultValue={storeUser.email} type="email" name='email' placeholder='Email' />
                        <br />
                        <button type="submit">Update User</button>
               </form>

        </div>
    );
};

export default Update;