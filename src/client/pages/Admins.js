import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

export class AdminsList extends Component {
  componentDidMount() {
    const { admins, fetchAdmins } = this.props;
    !admins && fetchAdmins();
  }
  renderAdmins() {
    return this.props.admins.map(admin => (<li key={admin.id}>{admin.name}</li>));
  }

  render() {
    return (
          <div >
              <h2 />
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
  component: connect(mapStateToProps, { fetchAdmins })(AdminsList),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
};
