import React, { Component } from "react";
import { getAllUsers } from "../api";

class UserList extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const response = await getAllUsers();
    this.setState({
      users: response.data,
    });
  }

  render() {
    return (
      <>
        <h2>List of Users</h2>
        <ul>
          {this.state.users.map((user) => {
            return (
              <li key={user._id}>
                  {user.name}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default UserList;