import React, { useState, useEffect } from 'react';
import './Pages.css';

const Form1 = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [address, setAddress] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('data')) || [];
    setData(savedData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !dob || !email || !phone || !course || !address || !additionalInfo) {
      alert('Please fill out all fields before submitting.');
      return;  
    }
    const newEntry = { name, dob, email, phone, course, address, additionalInfo };
    
    const updatedData = [...data, newEntry];
    setData(updatedData);
    localStorage.setItem('data', JSON.stringify(updatedData));

    setName('');
    setDob('');
    setEmail('');
    setPhone('');
    setCourse('');
    setAddress('');
    setAdditionalInfo('');
  };

 
  return (
    <div className="form-container">
      <h1 style={{ padding: '10px' }}>Academic year 2023-24 Enquiry Screen!</h1>
      <form onSubmit={handleSubmit}>
        <div className="div">
          <label className="form5">Your full Name</label>
          <input
            className="fomInput"
            type="text"
            placeholder="Enter your fullname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="div">
          <label className="form5">Your Email</label>
          <input
            type="email"
            className="fomInput"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="div">
          <label className="form5">Date of Birth</label>
          <input
            className="fomInput"
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="div">
          <label className="form5">Mobile Number</label>
          <input
            className="fomInput"
            placeholder="+91-1234567890"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="div">
          <label className="form5">Course</label>
          <select
            className="fomInput"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          >
            <option value="">Select a course</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Business Administration">Business Administration</option>
            <option value="Mechanical Engineering">Mechanical Engineering</option>
            <option value="Physics">Physics</option>
            <option value="Mathematics">Mathematics</option>
          </select>
        </div>
        <div className="div">
          <label className="form5">Address</label>
          <input
            className="fomInput"
            placeholder="address...."
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="div">
          <label className="form5">Additional Info</label>
          <input
            placeholder="additional information...."
            className="fomInput"
            type="text"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          />
        </div>

        <button type="submit" className="fomInput">Submit</button>
      </form>

    </div>
  );
};

export default Form1;
