import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';
import checkAuth from '../components/hocs/checkAuth';

export class AdminsList extends Component {
  componentDidMount() {
    /* const { admins, fetchAdmins } = this.props;
    !admins && fetchAdmins(); */
    this.props.fetchAdmins();
  }
  renderAdmins() {
    return this.props.admins.map(admin => <li key={admin.id}>{admin.name}</li>);
  }

  render() {
    return (
      <div >
        Admins List
        <ul>
          {this.renderAdmins()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}
export default {
  component: connect(mapStateToProps, { fetchAdmins })(checkAuth(AdminsList)),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
