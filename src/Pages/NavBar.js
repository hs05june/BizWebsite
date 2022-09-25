import React from 'react'
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';
// import styles from "../styles/NavBar.module.css"
// import Link from 'next/link';
import Avatar from '@material-ui/core/Avatar';
import {NavLink} from 'react-router-dom';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import { BiBell } from "react-icons/bi";
import styled from 'styled-components';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import Switch from '@material-ui/core/Switch'
const NavBar = (props) => {
  return (
    <NavBarStyled>
        <div className='nav_left'>
   <div> Nifty Small Cap</div>
   <div>4205.90</div>
   <div
   style={{
    display:'flex',
    alignItems:'center',
    color:'#797979'
   }}
   >+0.00(0.00%) <span><ArrowDropDownRoundedIcon
   style={{
   color:'red',
   marginTop:"0.2em",
   fontSize:'2.5em',

   }}
   /></span></div>
        </div>
        <div className='nav_right'>
<div className='nav_logo'>
logo
</div>
<div className='nav_links'>
    <ul>
       <li><NavLink to="/" exact>
      <a>Home</a>
       </NavLink></li>
       <li><NavLink to="/market" exact>
      <a>Market</a>
       </NavLink></li>
       <li><NavLink to="/watchlist" exact>
      <a>Watchlist</a>
       </NavLink></li>
       <li><NavLink to="/orders" exact>
      <a>Orders</a>
       </NavLink></li>
       <li><NavLink to="/about" exact>
      <a>About</a>
       </NavLink></li>
    </ul>
</div>
<div className='nav_user'>
    <NotificationsActiveIcon 
    style={{
        fontSize:"1.3rem"
    }}
    />
    <span>Hi <span style={{
        fontWeight:"bold"
    }}>user</span></span>
<Avatar />
</div>
        </div>

        <Switch 
                  value=""
                  checked={props.checked}
                  inputProps={{ 'aria-label': '' }}
                  size="medium"
                  onClick={props.themeToggler}
                />
        <Brightness4Icon />


    </NavBarStyled>
  )
}

const NavBarStyled = styled.nav`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

    display: flex;
    height: 10vh;
    /* background: #000; */
    background: var(--background-nav-color);
    align-items: center;
    padding: 2vh 3vw;
    cursor: default;
    position : sticky;
    top:0;
    left:0;
    z-index:100;
    // width:95vw;
    overflow: hidden;
.nav_left{
    width: 30%;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    font-weight: 600;
    align-items: center;
}
.nav_right{
    width: 70%;
    /* background: green; */
    height: 10vh;
    display: flex;
    align-items: center;
    /* padding: 0 0%  */
    /* background: #F6F6F6; */
}
.nav_links{
    width: 70%;
    font-size: 1em;
    font-weight: bold;
    height: 100%;
    font-family: 'Inter', sans-serif;
    letter-spacing: 0.8px;
    padding-left:5%;
}
.nav_links ul{
    display: flex;
    justify-content: space-between;
    /* padding-bottom: 3vh; */
    
}
.nav_links li{
    list-style: none;
    height: 100%;
    margin-top: 2%;
    padding-bottom: 3vh;
    // cursor: pointer;
}
.nav_links li:hover{
    color: #DA373D;
    border-bottom: 3px #DA373D solid;
    cursor:pointer;
}
.nav_user{
margin-left: auto;
display: flex;
align-items: center;
width: 17%;
justify-content: space-between;
}
`

export default NavBar