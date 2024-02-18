import React, { useState } from 'react';
import "./form.scss"
import { NavLink } from 'react-router-dom';
import { getDatabase, ref, set } from "firebase/database";
import { database } from '../../firebase';
// import NavBar from '../../components/Navbar/NavBar';
import { v4 as uuidv4 } from "uuid";
const FormComponent = () => {
  // set(ref(database, 'users/' + "kunal"), {
  //   username: "kunal",
  //   email: "kunal@",
  //   profile_picture : "imageUrl"
  // });
  const token = uuidv4();

  const [formData, setFormData] = useState({
    InstituteName: '',
      Address: '',
      city: '',
      state:'',
      contactno:'',
  });

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
      InstituteName: '',
      Address: '',
      city: '',
      state:'',
      contactno:'',
    });
  };


  return (
    <div className="form">
      {/* <span onClick={}></span> */}
      <div className="formbox">

    <div className="form-container">
      <h1 className='heading'>Create Your Account</h1>
      <form onSubmit={handleSubmit} className='from'>
        <label className='label' >
         <div className="name">Name of the Institution :</div>
          <input
            type="text"
            name="InstituteName"
            className='input'
            value={formData.InstituteName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className='label' >
         <div className="name">Address :</div>

          
          <input
            type="text"
            className='input'
            name="Address"
            value={formData.Address}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className='label' >
          
          <div className="name">City :</div>

          <input
            type="text"
            name="city"
            className='input'
            value={formData.city}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className='label' >
        <div className="name">State :</div>

         
          <input
            type="text"
            name="state"
            className='input'
            value={formData.state}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className='label' >
        <div className="name">Contact no :</div>

         
          <input
            type="text"
            name="contactno"
            className='input'
            value={formData.contactno}
            onChange={handleInputChange}
          />
        </label><br />
        <NavLink to="/submit">

        <button type="submit">Submit</button>
        </NavLink>
      </form>
    </div>
      </div>

    </div>

  );
};

export default FormComponent;
