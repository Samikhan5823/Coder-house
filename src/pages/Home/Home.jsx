import React from 'react'
import { Link,useNavigate} from 'react-router-dom'
import Button from '../../Components/Shared/Button/Button'
import Card from '../../Components/Shared/Card/Card'
import styles from './Home.module.css'
const Home = () => {
  const navigate=useNavigate()
  const startRegister=()=>{
    navigate('/register')
  }
  return (
    <div className={styles.cardwrapper}>
      <Card title="Welcome to Coderhouse" icon="logo">
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button onClick={startRegister} text="Get your username" />
        </div>
        <div className={styles.signupwrapper}>
          <span>Have an invite text? </span>
          <Link to="/login">Sign In </Link>
        </div>
      </Card>
    </div>
  )
}

export default Home
