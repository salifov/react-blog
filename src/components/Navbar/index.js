import React, {useState} from 'react';
import './style.css';
import {NavLink} from 'react-router-dom';

export default function Navbar() {

    const [search, setSearch] = useState(false);

    const submitSearch = (e) =>{
        e.preventDefault();
        alert("Searched");
    }

    const openSearch = () => {
        setSearch(true);
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';

    return (
        <div className="navbar">
            <ul className="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about-us">About Us</NavLink></li>
                <li><NavLink to="/post">Posts</NavLink></li>
                <li><NavLink to="contact-us">Contact Us</NavLink></li>
            </ul>
            <div className="search">
                <form onSubmit={submitSearch}>
                    <input className={searchClass} type="text" placeholder="Search" />
                    <img className="searchIcon" onClick={openSearch} src={require('../../assets/icons/search.png')} alt="Search" ></img>
                </form>
                
            </div>
        </div>
    )
}
