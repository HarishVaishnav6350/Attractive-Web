 import React,{useState ,useEffect} from 'react'
 
 const Profile = () => {
const [name ,setName] = useState('');
const [email ,setEmail] = useState('');
const [phone ,setPhone] = useState('');
const [about ,setAbout] = useState('');
const [avatar ,setAvatar] = useState('');
const [gender ,setGender] =useState('');
const [dob ,setDob] =useState('');
const [address ,setAddress] =useState('');
const [profession ,setProfession] =useState('');
const [country ,setCountry] =useState('');
const [coverPhoto, setCoverPhoto]  =useState('')
const [isSubmitted ,setIsSubmitted] =useState(false);
const [details ,setDetails] =useState([]);

useEffect(()=>{
  const UserProfile =JSON.parse(localStorage.getItem('UserProfile')) || [];
  if (UserProfile) {

    setDetails([UserProfile]);
    setIsSubmitted(true)
    setName(UserProfile.name || '');
    setEmail(UserProfile.email || '');
    setPhone(UserProfile.phone || '');
    setAbout(UserProfile.about || '');
    setAvatar(UserProfile.avatar || '');
    setGender(UserProfile.gender || '');
    setDob(UserProfile.dob || '');
    setAddress(UserProfile.address || '');
    setProfession(UserProfile.profession || '');
    setCountry(UserProfile.country || '');
    setCoverPhoto(UserProfile.coverPhoto || '')
  }
},[])

const Edit =()=>{
setDetails([]);
setIsSubmitted(false);
setAvatar('');
setCoverPhoto('')

}

const HandleImage = (e, type) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      if (type === 'avatar') {
        setAvatar(reader.result); 
      } else {
        setCoverPhoto(reader.result);
      }
    };
    reader.readAsDataURL(file);
  }
};

const handleSubmit =(e)=>{
  e.preventDefault();
  const  UserProfile = {coverPhoto,name,email,phone,about,avatar,gender,dob,address,profession,country};

  localStorage.setItem('UserProfile',JSON.stringify(UserProfile));
  setIsSubmitted(true)
  setDetails([UserProfile])
}
return (
     <div className='container'>
      {!isSubmitted ? (
        <div>
          <form onSubmit={handleSubmit}>
       <div>
       <label htmlFor="avatar">Uplode Avatar</label>
              <input
                type="file"
                id="avatar"
                // value={HandleImage}
                onChange={(e)=> HandleImage(e, 'avatar')}
              />
               {avatar && <img src={avatar} alt="Avatar Preview" style={{ width: "150px", borderRadius: "50%" }} />}
          </div>
          <div>
       <label htmlFor="coverPhoto">Uplode coverPhoto</label>
              <input
                type="file"
                id="coverPhoto"
                // value={HandleImage}
                onChange={(e)=>  HandleImage(e, 'coverPhoto')}
              />
               {coverPhoto && <img src={coverPhoto} alt="Preview" style={{ width: "150px", borderRadius: "50%" }} />}
          </div>
       <div>
       <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
       </div>
       
       <div>
       <label htmlFor="dob">date of birth</label>
              <input
                type="date"
                id="dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
       </div>
       <div>
       <h3>Gender</h3>
            <label htmlFor='male'>Male</label>
              <input
                type="radio"
                id="male"
                value='male'
                checked ={gender==='male'}
                onChange={(e) => setGender(e.target.value)}
              />
               <label htmlFor='female'>Female</label>
              <input
                type="radio"
                id="female"
                value='female'
                checked ={gender==='female'}
                onChange={(e) => setGender(e.target.value)}
              />
              
       </div>
       <div>
       <label htmlFor="phone">Phone</label>
              <input
                type=" tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your Mobile no:"
              />
       </div>
       
       <div>
       <label htmlFor="email">E-mail</label>
              <input
                type="text"
                id="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your E-mail"
              />
       </div>
       <div>
       <label htmlFor="profession">Profession</label>
              <input
                type="text"
                id="profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                placeholder="Enter your profession"
              />
       </div>
       <div>
       <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter your country name"
              />

<div>
       <label htmlFor="about">About</label>
              <input
                type="text"
                id="about"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="About yourself..."
              />
       </div>
       <div>
       <label htmlFor="address"> Address </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder='Address....'
              />
       </div>

       <button className='detail-sub' onSubmit={handleSubmit}> Uplode detail</button>
       
       </div>
       
       </form>
      </div>

      ):(
        <div className='page'>
       {    details.map((entry,index) => (
            <div key={index} className='detail-user' >
              {entry.coverPhoto && <img src={entry.coverPhoto} alt="User-Cover" className='User-Cover'  /> }
             <div className='entrys'>
              <p className='e-mail'><strong>Email:</strong> {entry.email}</p>
              <p className='dob'><strong>Date of Birth:</strong> {entry.dob}</p>
              <p className='phone'><strong>Phone:</strong> {entry.phone}</p>
              <p className='pro'><strong>Course:</strong> {entry.profession}</p>
              <p className='addr'><strong>Address:</strong> {entry.address}</p>
              <p className='add-info'><strong>Additional Info:</strong> {entry.additionalInfo}</p>
              <p className='country'><strong>Country:</strong> {entry.country}</p>
              <p className='about'><strong>About:</strong> {entry.about}</p>
              <p className='gender'><strong>Gender:</strong> {entry.gender}</p>
              </div>

              
              
              
              {entry.avatar && <img src={entry.avatar} alt="User-Avatar" className='User-Avtar'  /> }
               <div className='user'> <h3> hello! {entry.name}</h3> 
               </div>
            </div>
          ))}
<button className='Edit' onClick={Edit}>Edit profile</button>


        </div>


      )
      
      }
       
     </div>
   )
 }
 
 export default Profile;
 