const UserProfile = (props) => {
    return (
      <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
        <p>Bio: {props.bio}</p>
      </div>
    );
  };

  /* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import UserContext from '../components/UserContext';


<div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
   <h2 style={{ color: 'blue' }}>{name}</h2>
   <p>Age: 26 <span style={{ fontWeight: 'bold' }}>{age}</span></p>
   <p>Bio: Loves travel and photography {bio}</p>
   <UserContext/>
 </div>

export default UserProfile;