import React, { Component } from 'react';
import axios from 'axios';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Users extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => { console.log(res.data); this.setState({ users: res.data }) });
  }

  render() {
    return (
      <div className="bg-light ">
        <h4 className="text-dark">User List</h4>
        <UserTbl userList={this.state.users}></UserTbl>
      </div>
    );
  }
}

const UserTbl = (props) => {
  return <div className="row">
    {
      props.userList.length > 0 ?
        <div className="container fluid">
          <div className="row mx-auto">
            <table className="bg-dark text-white text-left table table-bordered bg-light  width:100%">
              <thead><tr>
                <th>Name</th>
                <th>User Name</th>
              <th>album</th>
              
              </tr>
              </thead>
              <tbody>
                {props.userList.map((user) =>
                  <tr className="link hstrike" key={user.name}>
                <td title={"Posts of " + user.name}>
                <NavLink to={"/Posts/" + user.id + "/" + user.name}>
                {user.name}
                </NavLink></td><td>
                {user.username}
                </td>
                <td><button className="btn btn-secondary">
                <NavLink to={"/Albums/"+user.id+"/"+user.name}>view albums</NavLink>
                </button></td>
                </tr>)}

              </tbody>
            </table>
          </div>
        </div>
        : <div className=" text-light">No Users in the List</div>
    }
  </div>
}

export default Users;