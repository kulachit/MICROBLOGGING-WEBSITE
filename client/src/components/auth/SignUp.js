import React from "react";
import PropTypes from "prop-types";
import Input from "../form/Input";
import './sign_up.css'
import logo from '../images/logo.png'
import pic from '../images/pic.png'

const SignUp = ({ loading, user, onBlur, onChange, onSubmit, onClick }) => {
   const { user_name, email, password, errors } = user;
   return (
   <div className="bodySU">
      <div className="blockSU">
         <div className="imageSU">
            <img src={pic} alt="BIG OOF" className="sideImgSU"></img>
            <div className="textSU">
               <h3 className="customTextSU">Already have an account?</h3>
               <h3 className="linkSU" onClick={onClick}> Sign in!</h3>
            </div>
         </div>
         <div className="blockRightSU">
            <img className="logoSU" src={logo} alt="BIG OOF"></img>
            <h2 className="signinSU">Sign up</h2>
            <form className="formStyleSU" onSubmit={onSubmit}>
               <Input
                  name="user_name"
                  type="text"
                  placeholder="Enter Username"
                  value={user_name}
                  onChange={onChange}
                  onBlur={onBlur}
                  text={{
                     module: "SignUp",
                     label: "Username",
                     error: errors.user_name
                  }}
               />
               <Input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={onChange}
                  onBlur={onBlur}
                  text={{
                     module: "SignUp",
                     label: "Email",
                     error: errors.email
                  }}
               />
               <Input
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onBlur={onBlur}
                  onChange={onChange}
                  text={{
                     module: "SignUp",
                     label: "Password",
                     error: errors.password
                  }}
               />
               <button
                  variant="info"
                  type="submit"
                  className="btnRoundedSU"
                  disabled={loading}
               >
                  Sign Up
               </button>
            </form>
         </div>
      </div> 
   </div>
   )
}
SignUp.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   onBlur: PropTypes.func.isRequired,
   user: PropTypes.object.isRequired,
   loading: PropTypes.bool.isRequired
};

export default SignUp;
