import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import { Helmet } from 'react-helmet';


class Users extends Component {
  componentDidMount() {
    /* const { users, fetchUsers } = this.props;
    !users && fetchUsers(); */
    this.props.fetchUsers();
  }
  renderUsers() {
    return this.props.users.map(user => (<li key={user.id}>{user.name}</li>));
  }
  head() {
    return (<Helmet>
      <title>{`${this.props.users.length} Users in user lists`}</title>
      <meta property="og:title" content="OG title user list" />
            </Helmet>);
  }
  render() {
    return (<div>Users Lists
      {this.head()}
      <ul>
        {this.renderUsers()}
      </ul>
            </div>);
  }
}
function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}
export default { component: connect(mapStateToProps, { fetchUsers })(Users), loadData };
