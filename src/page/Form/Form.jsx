import React, { useState } from 'react';
import "./form.scss"
// import { Histor } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";
import { database } from '../../firebase';
// import NavBar from '../../components/Navbar/NavBar';
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from 'react-router-dom';
const FormComponent = () => {
  
  const token = uuidv4();
 
  const [formData, setFormData] = useState({
    Firstname:'',
      Lastname:'',
      email:'',
  });
  const navhook = useNavigate();

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
   
    // Here you can perform actions like sending form data to a server
    console.log(formData);
    // Reset form after submission
     set(ref(database, 'users/'+token), formData);
    console.log("asdfasdf")
    setFormData({
      Firstname:'',
      Lastname:'',
      email:'',
    });
    navhook('/submit');
  };


  return (
    <div className="form">
      {/* <span onClick={}></span> */}
      <div className="formbox">

    <div className="form-container">
      <h1 className='heading'>Create Your Account</h1>
      <form onSubmit={handleSubmit} className='from'>
        <label className='label' >
         <div className="name">First Name :</div>
          <input
            type="text"
            name="Firstname"
            className='input'
            value={formData.Firstname}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className='label' >
         <div className="name">Last Name :</div>

          
          <input
            type="text"
            className='input'
            name="Lastname"
            value={formData.Lastname}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className='label' >
          
          <div className="name">Email :</div>

          <input
            type="email"
            name="email"
            className='input'
            value={formData.email}
            onChange={handleInputChange}
          />
        
        </label><br />
        {/* <Link to="/submit"> */}

        <button type="submit">Submit</button>
        {/* </Link> */}
      </form>
    </div>
      </div>

    </div>

  );
};

export default FormComponent;


  



