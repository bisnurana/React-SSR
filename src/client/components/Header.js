import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  const authButton = auth ? (<a href="/api/logout">Logout</a>) : (<a href="/api/auth/google">Login</a>);
  return (
    <div>
      <Link to="/" >Home</Link>
      {auth && <Link to="/admins" >Admins</Link>}
      <Link to="/users" >Users</Link>
      {authButton}
    </div>);
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
