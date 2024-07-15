import React from 'react'
import NoResults from '../assets/no_results_inverted.png'
import styles from '../styles/NotFound.module.css'
import Asset from './Asset'

const NotFound = () => {
  return (
    <div className={styles.NotFoundImage} >
        <Asset src={NoResults} message={"Sorry, the page you're looking for doen't exist"}/>
    </div>
  )
}

export default NotFound