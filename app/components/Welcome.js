import React, { Component } from 'react';
import { Link, RouteHandler } from 'react-router';
import styles from './Welcome.css';

export default class Welcome extends Component {
  render() {
    return <div className={styles.container}>
      <h1>INVOICER</h1>
      <Link to="/clients"><button className={styles.signUp}>Sign up</button></Link>
      <h3>OR</h3>
      <Link to="/navbar"><button className={styles.signIn}>Sign in</button></Link>
    </div>
  }
}
