import React, { useEffect, useRef, useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import film_logo from '../assets/film_logo.png'
import styles from '../styles/NavBar.module.css'
import  {NavLink}  from 'react-router-dom'

import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import Avatar from './Avatar'
import axios from 'axios'
import { Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap'
import useClickOutsideToggle from '../hooks/useClickOutsideToggle'




const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const {expanded, setExpanded, ref} = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null);
    } catch(err) {
      console.log(err);
    }
  }

  const addPostIcon = (
    <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/movies/create"
    >
      <i className="fa-solid fa-film"></i>Add Movie
      </NavLink>
  
  )

  const loggedOutIcons = <>
  <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signin"><i className="fa-solid fa-right-to-bracket"></i>Sign in</NavLink>
  <NavLink className={styles.NavLink} activeClassName={styles.Active} to="/signup"><i className="fa-solid fa-user-plus"></i>Sign up</NavLink>

  </>
  const loggedInIcons = <>
  <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/feed"
    >
      <i className="fa-solid fa-ticket"></i>Feed
      </NavLink>
      <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/feed"
    >
      <i className="fa-solid fa-video"></i>New
      </NavLink>
      <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/new"
    >
      <i className="fa-solid fa-star"></i>Popular
      </NavLink>
      <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/new"
    >
      <i className="fa-solid fa-heart"></i>Liked
      </NavLink>
      <NavLink
            className={styles.NavLink}
            to="/"
            onClick={handleSignOut}
            >
              <i className="fa-solid fa-right-from-bracket"></i>Sign out
          </NavLink>
      <NavLink
    className={styles.NavLink}
    to={`/profiles/${currentUser?.profile_id}`}
    onClick={() => {}}
    >
      <Avatar src={currentUser?.profile_image} height={40} />{currentUser?.username}
      </NavLink>

      
          
        
          
        

  </>
  
  return (
    <Navbar expanded={expanded} className={styles.NavBar} bg="light" expand="md" fixed="top">
<NavLink to="/">
  <Navbar.Brand><Container><img src={film_logo} alt="film logo" height="50"/><h1>Movie Reviews</h1></Container></Navbar.Brand>
  </NavLink>
  {currentUser && addPostIcon}
  <Navbar.Toggle ref={ref} onClick={() => setExpanded(!expanded)} aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto text-left">
      <NavLink
      exact className={styles.NavLink}
      activeClassName={styles.Active}
      to="/"
      >
        <i className="fa-solid fa-house"></i>Home</NavLink>
      <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/movies"
    >
      <i className="fa-solid fa-clapperboard"></i>Movies
      </NavLink>
      {currentUser ? loggedInIcons : loggedOutIcons}
    </Nav>
  </Navbar.Collapse>
</Navbar>
  )
}

export default NavBar