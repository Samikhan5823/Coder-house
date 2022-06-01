import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'
const Navigation = () => {
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={{color:'#fff',textDecoration:'none',fontWeight:'bold',fontSize:'22px',display:'flex',alignItems:'center'}} to="/">
        <img src="/images/logo.png" alt="logo" />
        <span style={{marginLeft:'10px'}}>Coderhouse</span>
      </Link>
    </nav>
  )
}

export default Navigation
