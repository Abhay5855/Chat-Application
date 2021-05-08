import React from 'react'
import './Header.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
function Header() {
    return (
        <div className="header">

        <div className="header__left">
            {/* Avatar */}
            <Avatar 
            className="header__avatar"
            alt="Remy Sharp" 
            src="/static/images/avatar/1.jpg"
            
             />

            {/* Timeicon */}
            < AccessTimeIcon />
           
            
        </div>

        <div className="header__search">
            {/* search icon */}
            <SearchIcon />
            {/* input */}
            <input placeholder="search" />
        </div>

        <div classNam="header__right">
            {/* help icon */}
            <HelpOutlineIcon />
        </div>
            
        </div>
    )
}

export default Header
