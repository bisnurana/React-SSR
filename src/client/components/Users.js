import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchUsers } from '../actions';


class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  renderUsers() {
    return this.props.users.map(user => (<li key={user.id}>{user.name}</li>));
  }
  render() {
    return (<div>Users Lists
          <ul>
            {this.renderUsers()}
          </ul>
                </div>);
  }
}
function mapStateToProps(state) {
  return { users: state.users };
}
export default connect(mapStateToProps, { fetchUsers })(Users);
