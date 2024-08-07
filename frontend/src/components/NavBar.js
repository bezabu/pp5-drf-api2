import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import film_logo from '../assets/film_logo.png'
import styles from '../styles/NavBar.module.css'
import  {NavLink}  from 'react-router-dom'
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext'
import Avatar from './Avatar'
import axios from 'axios'
import useClickOutsideToggle from '../hooks/useClickOutsideToggle'
import { removeTokenTimestamp } from '../utils/utils'


const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  const {expanded, setExpanded, ref} = useClickOutsideToggle();
  const handleSignOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null);
      removeTokenTimestamp();
    } catch(err) {
      console.log(err);
    }
  }

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
    to="/popular"
    >
      <i className="fa-solid fa-star"></i>Popular
      </NavLink>
      <NavLink
    className={styles.NavLink}
    activeClassName={styles.Active}
    to="/liked"
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
      <Avatar src={currentUser?.profile_image} height={40} text="Profile"/>
      </NavLink>
  </>
  
  return (
    <Navbar expanded={expanded} className={styles.NavBar} bg="light" expand="md" fixed="top">
<NavLink to="/">
  <Navbar.Brand><Container className={styles.NavBarTitle}><img src={film_logo} alt="film logo" height="50" width="50"/><h1 className={styles.Title}>MiniReviews</h1></Container></Navbar.Brand>
  </NavLink>
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