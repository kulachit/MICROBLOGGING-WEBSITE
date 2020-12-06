import React from "react";
import PropTypes from "prop-types";
import Input from "../form/Input";
import './sign_in.css';
import logo from '../images/logo.png';
import pic from '../images/pic.png';


const Login = ({ message, loading, user, onChange, onBlur, onSubmit, onClick }) => {
   const { email, password, errors } = user;
   return (
   <div className="bodySI">
      <div className="blockSI">
         <div className="imageSI">
            <img src={pic} alt="BIG OOF" className="sideImgSI"></img>
            <div className="textSI">
               <h3 className="customTextSI">Don't have an account?</h3>
               <h3 className="linkSI" onClick={onClick} > Sign up now!</h3>
            </div>
         </div>
         <div className="blockRightSI" >
            <img className="logoSI" src={logo} alt="BIG OOF"></img>
            <h2 className="signinSI">Sign In</h2>
            <form className="formStyleSI" onSubmit={onSubmit}>
               <Input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={onChange}
                  onBlur={onBlur}
                  text={{
                     module: "login",
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
                     module: "login",
                     label: "Password",
                     error: errors.password
                  }}
               />
               <button
                  variant="info"
                  type="submit"
                  className="btnRoundedSI"
                  disabled={loading}
               >
                  Sign In
               </button>
            </form>
         </div>
      </div>
   </div>
  )
}
Login.propTypes = {
   onSubmit: PropTypes.func.isRequired,
   onChange: PropTypes.func.isRequired,
   onBlur: PropTypes.func.isRequired,
   user: PropTypes.object.isRequired,
   message: PropTypes.string.isRequired,
   loading: PropTypes.bool.isRequired
};

export default Login;
