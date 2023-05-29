import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const OTPForm = () => {
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate()
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
    
        const response = await axios.post('https://otp-verification-mj95.onrender.com/api/v1/create', { email });
        console.log(response.data);
         
       
        setSuccessMessage('OTP sent successfully');
        setErrorMessage('');
  
  
       navigate("/verify")
      } catch (error) {
        console.error(error);
  
      
        setSuccessMessage('');
        setErrorMessage('Failed to send OTP');
      }
    };
  return (
    <div>
         <form onSubmit={handleSubmit}>
      <label htmlFor="email">Enter Your Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit" className='btn btn-outline-primary'>Send OTP</button>

      {successMessage && <p>{successMessage}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </form>

    </div>
  )
}

export default OTPForm