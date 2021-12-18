import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';
import { MenuOutlined} from '@ant-design/icons';
import navlogo from '../../logo-inverted.png';
const Navbar = ()=>{
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className='col-10 mx-auto'>
                    <nav className="navbar navbar-expand-lg ">
                        <NavLink className="navbar-brand " to="/"><img src={navlogo}  width="60" height="60" className=" align-top invisiblle" alt=""/>HeartBeats</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <MenuOutlined/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" exact to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" exact to="/events">Events</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" exact to="/inductions">Inductions</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" exact to="/members">Members</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" exact to="/gallery">Gallery</NavLink>
                            </li>
                       </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    );
};
export default Navbar;