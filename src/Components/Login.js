import React, { useRef, useState } from 'react'
// import { RiEyeCloseLine , RiEyeLine } from "react-icons/ri";
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import Switch from '@material-ui/core/Switch'
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const Login = (props) => {
  const [see, setSee] = useState(false)
  const emailRef = useRef("");
  const passRef = useRef("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passRef.current.value;
    if(email === "" || password === ""){
      alert("Please fill all the fields")
    }
    
  }
  return (
    <LoginStyles>
      <div className="theme">
          <div className="light-dark-mode">
              <div className="left-content">
                <Brightness4Icon />
              </div>
              <div className="right-content">
                 <Switch
                  value=""
                  checked={props.checked}
                  inputProps={{ 'aria-label': '' }}
                  size="medium"
                  onClick={props.themeToggler}
                  
                /> 
              </div>
            </div>
        </div>
  <div className="main">
    
        <div className="form">
          <div className="logo">Logo</div>
          <h4 id="login">Login</h4>
          <div className="input">
        <input type="text" placeholder='Enter Your Team Name'  ref={emailRef} />
          </div>
          <div className="input">
        <input type={`${!see ? "password" :"text"}`} placeholder='Enter Your Password' ref={passRef}/>
{
  see ?
  <VisibilityIcon onClick={()=>{setSee(!see)}} />
  :
  <VisibilityOffIcon onClick={()=>{setSee(!see)}} />
}
          </div>
          <div className="btn">
        <button onClick={handleSubmit}>Login</button>
          </div>
          <Link to="/" >
        Reset Password
          </Link>
        </div>
    </div>
</LoginStyles>
  )
}
const LoginStyles = styled.div`
.main{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 2rem 0 ;
}
.form{
 border: 2px rgba(0, 0, 0, 0.034) solid;
 box-shadow: 0rem  0rem 1rem 0rem var(--boxshadow-color) ;
 width: 40vw;
 display: flex;
 align-items: center;
 flex-direction: column;
 padding: 4rem 0.3rem;
 border-radius: 0.5rem;
 
}
.input {
width: 80%;
display: inline-flex;
border: 1.4px rgba(0, 0, 0, 0.135) solid;
padding: 1rem 0.5rem;
margin: 1rem 0rem;
border-radius: 0.3rem;
border: 1px solid var(--border-color);
}
.input input{
    width: 100%;
    outline: none;
    border: none;
    font-size: 1rem;
    color: inherit;
    background: transparent;
    background:var(--form-input-background);
}
.btn{
    width: 80%;
}
#login{
font-size: 2rem;
font-weight: 400;
}
#link{
   float: right;
   margin-top: 1rem;
}
.btn button{
    width: 100%;
    padding: 1rem 0.3rem;
    letter-spacing: 1px;
    font-size: 1rem;
    background-image: linear-gradient(0deg,#318c61,#4dba93fc)!important;
    color: #fff;
    border: none;
    border-radius: 0.3rem;
    cursor: pointer;
}
.logo{

}
@media(max-width:710px){
    .form{
        width: 70vw;
    }
}
@media(max-width:320px){
    .form{
        width: 80vw;
    }
}
`
export default Login