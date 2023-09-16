import "../../styles/Profile.css";
import { useState, Link } from "react";
import { validateEmail } from "../ProfilePage/Utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function LoginHero() {
    const [user, setUser] = useState({
        email:'',
        password:{
          value:"",
          isTouched:false
        }
      });
    
      const getIsFormValid = () => {
        // Implement this function
        return (
          validateEmail(user.email) &&
          user.password.value.length >= 8
        );
      };
    
      let name,value;
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
        name=e.target.name;
        value=e.target.value;
        setUser({...user,[name]:value})
      };

      return (
        <div className="App">
          <form>
            <fieldset>
              <h2 className="overflow-hidden">Login</h2>
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
              <div style={{ display: 'flex', justifyContent:'space-evenly' }}>
              <Link to="/">
              <button style={{marginRight:"1px"}}type="submit" className="profile-button" disabled={!getIsFormValid()} >
                Login
              </button>
              </Link>
              <Link to="/">
              <button type="submit" className="profile-button" disabled={getIsFormValid()}>
                Register
              </button>
              </Link>
              </div>
            </fieldset>
          </form>
        </div>
      );
}

export default LoginHero;
