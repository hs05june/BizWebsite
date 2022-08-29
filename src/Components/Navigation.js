import React from 'react'
import styled from 'styled-components';
// import {NavLink} from 'react-router-dom';
// import avatar from '../img/avatar.jpg';
import SearchIcon from '@material-ui/icons/Search';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ListItem from './ListItem';
// import PlayArrowRoundedIcon from '@material-ui/icons/PlayArrowRounded';

function Navigation() {
    return (
        <NavigationStyled>
            <form  className="avatar">
                <span className="searchIcon"><SearchIcon/></span>
                <input type="text" className="search" placeholder='Search for companies'/>
            </form>
            {/* <ul className="nav-items">
                <li className="nav-item">
                    <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolios" activeClassName="active-class" exact>Portfolios</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/blogs" activeClassName="active-class" exact>Blogs</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul> */}

            <div className='watchList'>
                <div className="watchList-head">
                    <PlayArrowIcon className='arrow'/>
                    <div>First Watchlist</div>
                    <ArrowDropDownIcon className='down'/>
                </div>
                <ListItem title="abcd" increase={false} value={330.30} subtitle="NSE" change={4.25} percent={1.30}/>
            </div>

            <footer className="footer">
                <p>@2022 <b>Biz Club IIT BHU</b></p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    background-color:  var(--background-color);
    border-right: 1px solid var(--border-color);
    overflow-y: auto;
    &::-webkit-scrollbar {
        display: none;
      }

    .avatar{
        width:90%;
        margin-top: 2vh;
        height:6vh;
        padding:10px;
        padding-left:15px;
        border-radius: 0.5vh;
        box-shadow:0 0 2px 2px #dedee3;
        font-size:1.3vw;
        display:flex;
        flex-direction: row;
        &:focus{
            box-shadow:0 0 2px 2px #99D5FF;
        }
    }
    .search{
        outline:none;
        border:0px ;
        margin-left:0.5vw;
        width:100%;
        background-color:  var(--background-color);
        color:var(--font-color);
    }
    .watchList-head{
        background:#FBC5CA;
        height:5vh;
        width:100%;
        padding-top:7px;
        div{
            color:black;
            margin-left:10px;
        }
        display:flex;
        flex-direction: row;
    }
    .watchList{
        height:100%;
        border:2px solid #E67595;
        border-radius:0.5vh;
        width:90%;
        margin:10px;
    }
    .arrow{
    color:red;
    text-shadow:0 0 2px 2px black;
    }

    .down{
        margin-left:115px;
        color:red;
    }

    .nav-items{
        width: 100%;
        text-align: center;
        .active-class{
            background-color: var(--primary-color-light);
            color: white;
        }
        li{
            display: block;
            a{
                display: block;
                padding: .45rem 0;
                position: relative;
                z-index: 10;
                text-transform: uppercase;
                transition: all .4s ease-in-out;
                font-weight: 600;
                letter-spacing: 1px;
                &:hover{
                    cursor: pointer;
                    color: var(--white-color);
                }
                &::before{
                    content: "";
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 0;
                    height: 50%;
                    background-color: var( --primary-color);
                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;
                    opacity: 0.21;
                    z-index: -1;
                }
            }

            a:hover::before{
                width: 100%;
                height: 100%;
            }
        }
    }

    footer{
        border-top: 1px solid var(--border-color);
        width: 100%;
        color:var(--font-color);
        p{
            padding: 1.3rem 0;
            font-size: 1.1rem;
            display: block;
            text-align: center;
        }
    }
`;
export default Navigation;
