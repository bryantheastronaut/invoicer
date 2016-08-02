import React, { Component } from 'react';
import { Link } from 'react-router';
import UserIcon from './UserIcon';


export default class Navbar extends Component {
  render() {
    return (
      <div>
        <h3 className='title'>Invoicer</h3>
        <UserIcon />
        <Link to='/'><i className='fa fa-arrow-left goBack'></i></Link>
      </div>
    )
  }
}
