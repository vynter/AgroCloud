import  { useState } from 'react';
import '../../assets/css/Signup.css'; 
import { useNavigate } from 'react-router-dom';

function Signup() {
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setPassword('');
    navigate('/login')
  };

  return (
   
 
    <div><br></br><br></br><br></br>
        <center><br></br><h1 className='head'>AgroCloud</h1></center>
   <center> <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            className="input-field"
            name='first-name'
            required
            />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            className="input-field"
            required
            />
        </div>
        <div className="form-group">
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
            className="input-field"
            required
            />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            
            onChange={(event) => setPassword(event.target.value)}
            className="input-field"
            required
            />
        </div>
        {/* <Link to='/login'> */}

        <button type="submit" className="submit-button">Register</button>
        {/* </Link> */}
      </form>
    </div></center></div>
            
  );
}

export default Signup;
