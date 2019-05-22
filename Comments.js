import React, { Component } from 'react';
import axios from 'axios';
import { Link, NavLink, withRouter } from 'react-router-dom';
class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] }
  } 
  componentDidMount() {
    axios('https://jsonplaceholder.typicode.com/comments?postId=' + this.props.match.params.id)
      .then(res => { console.log(res); this.setState({ comments: res.data }) });
  }

  handleClick=()=>{this.props.history.push('/Posts')}
  render() {
    return (
      <div className="container">
      <button type="button" onClick={this.handleClick} className="btn btn-danger">
          Back
        </button>
      <div className="bg-light ">
        <h4 className="text-dark">Comments List</h4>
        <CommentsTbl userList={this.state.comments}></CommentsTbl>
      </div>
      </div>
    );
  }
}

const CommentsTbl = (props) => {
  return <div className="row">
    {
      props.userList.length > 0 ?
        <div className="container fluid">
          <div className="row mx-auto">
            <table className="bg-dark text-white text-left table table-bordered bg-light  width:100%">
              <thead><tr><th>Id</th><th>User Name</th><th>Email</th><th>Body</th>
              </tr></thead>
              <tbody>
                {props.userList.map((comments) =>
                  <tr className="link hstrike" key={comments.id}>
                    <td title={"Comments of " + comments.id}>
                      {comments.id}
                    </td>
                    <td>
                      {comments.name}
                    </td>
                    <td>
                      {comments.email}
                    </td>
                    <td>
                      {comments.body}
                    </td>
                  </tr>)}

              </tbody>
            </table>
          </div>
        </div>
        : <div className=" text-light">No Comments in the List</div>
    }
  </div>
}


export default Comments;