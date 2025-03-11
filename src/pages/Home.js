import React from 'react';
import image from '../assets/nikunj.png';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${image})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    ObjectFit: 'center',
    margin: '10px 20px',
    borderRadius: '15px',
  };
  return (
    <div style={backgroundStyle}> 
      <h1 style={ {color:'red',fontSize:'100px', margin:0}}>NIKUNJ SWAMI</h1>
      <p style={{color:'black',fontWeight:'bold',margin:'0'}}>This is my first website and I am very excited to show you all the things that I have learned.</p> 
       
    </div>
  );
}

export default Home;
