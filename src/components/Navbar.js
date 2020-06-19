import React from 'react';
import { NavLink } from 'react-router-dom';
import avatarImage from '../img/avatars/ash_64.png';
import pointsImage from '../img/points.png';

function Navbar() {
    return (
        <div className="nav-bar">
            <div className="hamburger">
                <div className="line"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
            </div>
            <div className="pages">
                <div className="links">
                    <NavLink exact to="/" activeClassName="active">News</NavLink>
                    <NavLink exact to="/games" activeClassName="active">Games</NavLink>
                    <NavLink exact to="/store" activeClassName="active">Store</NavLink>
                    <NavLink exact to="/uplayplus" activeClassName="active">UPLAY+</NavLink>
                    <NavLink exact to="/beyondfpscpu" activeClassName="active">Beyond FPS: CPU</NavLink>
                </div>
                <div className="icons">
                    <i className="icon icon-cart x125 ml-auto"></i>
                    <i className="icon icon-key x125"></i>
                    <i className="icon icon-speech-bubble x125"></i>
                    <i className="icon icon-friends x125"></i>
                </div>
            </div>
            <div className="user">
                <div className="profile-picture online"><img src={avatarImage} alt="avatar" /></div>
                <div className="user-data">
                    <span className="username">araskihu</span>
                    <div className="level">
                        Level 28
                        <img className="points-img" src={pointsImage} alt="uplay points" />
                        <b>403</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;