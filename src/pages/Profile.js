import React, { useState, useEffect } from 'react';
import './Pages.css';

const ProfilePage = ()=> {
  const [ data, setData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data')) || [];
    setData(savedData);
    },[]);
    
  const deleteEntry =(remove)=>{
    const {name}= data[remove]
if(window.confirm(`are you sure to remove ${name} from database`))
{

  const newData = data.filter((entry, index)=> index !==remove)
  setData(newData);
  localStorage.setItem('data', JSON.stringify(newData))
}

  }

  const Reset = () => {
    if (window.confirm('Are you sure to delete everythig ?')) {
    localStorage.removeItem('data');
    setData([]);
  }}



  return (
    <div className="profile-container">
      {data?.length > 0 ? (
        <div className="profile-info">
          {data.map((entry,index) => (
            <div key={index} className="profile-entry">
              <h3>Employee {index + 1}</h3>
              <p><strong>Name:</strong> {entry.name}</p>
              <p><strong>Email:</strong> {entry.email}</p>
              <p><strong>Date of Birth:</strong> {entry.dob}</p>
              <p><strong>Phone:</strong> {entry.phone}</p>
              <p><strong>Course:</strong> {entry.course}</p>
              <p><strong>Address:</strong> {entry.address}</p>
              <p><strong>Additional Info:</strong> {entry.additionalInfo}</p>
              <button className ='delete-btn' onClick={()=>deleteEntry(index)}>X</button>
            </div>
          ))}
        </div>
      ) : (
        <p>No profile data available</p>
      )}
      <button className='reset-btn' onClick={Reset}>Reset</button>
    </div>
  );
}

export default ProfilePage;
