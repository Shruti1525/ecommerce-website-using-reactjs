import "../../styles/Profile.css";
import { useState } from "react";
import { validateEmail } from "./Utils";
import { Link } from "react-router-dom";


const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function ProfileHero() {
  const [user, setUser] = useState({
    firstname:'',
    lastname:'',
    email:'',
    password:{
      value:"",
      isTouched:false
    }
  });

  const getIsFormValid = () => {
    // Implement this function
    return (
      user.firstname &&
      user.lastname&&
      validateEmail(user.email) &&
      user.password.value.length >= 8
    );
  };

  let name,value;

  const handleSubmit = (e) => {
    e.preventDefault();
   
    name=e.target.name;
    value=e.target.value;
    setUser({...user,[name]:value})
  };

  return (
    <div className="App">
      <form >
        <fieldset>
          <h2 className="overflow-hidden">Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              type="text"
              value={user.firstname}
              onChange={ e=> setUser({...user,firstname:e.target.value})}
              placeholder="First name"
            />
          </div>
          <div className="Field">
            <label>Last name <sup>*</sup></label>
            <input
              type="text"
              value={user.lastname}
              onChange={e => setUser({...user,lastname:e.target.value}) }
              placeholder="Last name"
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              type="email"
              value={user.email}
              onChange={e => setUser({...user,email:e.target.value}) }
              placeholder="Email address"
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              value={user.password.value}
              onChange={e =>setUser({...user,password:{...user.password,value:e.target.value}})}
              onBlur={()=>setUser({...user,password:{...user.password,isTouched:true}})}
              placeholder="Password"
            />
            {user.password.isTouched && user.password.value.length< 8 ? <PasswordErrorMessage />:null}
          </div>
          <div style={{ display: 'flex',justifyContent:'space-evenly'}}>
          <Link to="/login">
          <button type="submit" className="profile-button" disabled={!getIsFormValid()} >
            Create account
          </button>
          </Link>
          <Link to="/login">
          <button type="submit" className="profile-button" disabled={getIsFormValid()}>
            Login
          </button>
          </Link>
          </div>
          <div></div>
        </fieldset>
      </form>
    </div>
  );
}

export default ProfileHero;
