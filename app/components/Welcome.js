import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './Welcome.css';

export default class Welcome extends Component {
  render() {
    return <div className={styles.container}>
      <h1>INVOICER</h1>
      <Link to="/home"><button className={styles.signUp}>Sign up</button></Link>
      <p>or</p>
      <Link to="/home"><button className={styles.signIn}>Sign in</button></Link>
    </div>
  }
}
