import React, { useState, useEffect } from 'react';
import './Pages.css';
import {EmpData} from './Components';
const Employee = ()=> {
  const [ data, setData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data')) || [];
    setData(savedData);
    },[]);
    
  const deleteEntry =(remove)=>{
    const {name}= data[remove]
if(window.confirm(`are you sure to remove ${name} from database`))
{

  const newData = data.filter((_blank, index)=> index !==remove)
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
     <EmpData   data={data} deleteEntry={deleteEntry} Reset={Reset} />
    </div>
  );
}

export default Employee;
