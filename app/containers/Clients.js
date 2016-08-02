import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Clients = React.createClass({
  render () {
    return (
      <div>
        <Link to='/'><i className='fa fa-arrow-left goBack'></i></Link>
        <h2>HELLO APP</h2>
      </div>
    )
  }
})

export default Clients;
