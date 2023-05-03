import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
      const users = useLoaderData();
      const [displayUser,setDisplayUser] = useState(users);
      const handleDelete = (user) => {
          const agree = window.confirm(`Are you sure you delete this ${user.name}`)
           if(agree){
                 fetch(`http://localhost:5000/users/${user._id}`,{
                    method: 'DELETE'
                 })
                 .then(res => res.json())
                 .then(data => {
                      if(data.deletedCount > 0) {
                        alert('Úser deleted succesfully');
                        const remainningUser = displayUser.filter( usr => usr._id !== user._id);
                        setDisplayUser(remainningUser);
                      }
                    
                })
           }

          
         

      }
    return (
        <div>
            <h1>User: {displayUser.length} </h1>
            {
                 displayUser.map( user => <p key={user._id}>
                    {user.name} {user.email}
                    <Link to={`/update/${user._id}`}>
                          <button>Update</button>
                    </Link>
                     <button onClick={()=> handleDelete(user)}>X</button>
                 </p>)
            }
        </div>
    );
};

export default Home;