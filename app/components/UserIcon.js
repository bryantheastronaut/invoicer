import React, { Component } from 'react';
import data from '../../data.json';

export default class UserIcon extends Component {
  render() {
    return (
      <div>
        <i className="fa fa-user mdIcon"></i>
        <p className='userID'>User: {data.user2.name} is eating {data.user2.favFood}<i className='fa fa-gear smIcon'></i></p>
      </div>
    )
  }
}
