import React,{Component} from 'react';
import axios from 'axios';
import {Link , NavLink,withRouter} from 'react-router-dom';
class Posts extends Component {
  constructor(props){
    super(props);
    this.state={posts:[]}
  }
  componentDidMount(){
    axios('https://jsonplaceholder.typicode.com/posts?userId='+this.props.match.params.id)
    .then(res=>{console.log(res);this.setState({posts:res.data})});
  }
  handleClick=()=>{this.props.history.push('/Users')}
  render(){
    return (
      <div className="container">
        <button type="button" onClick={this.handleClick} className="btn btn-block">
            Back
        </button>
        <h2>Posts of {this.props.match.params.name}</h2>
      <table className="table">
        <thead><tr><th>Id</th><th>Title</th><th>Posts</th><th>press</th></tr></thead>
        <Post posts={this.state.posts}></Post>
      </table>  
    </div>)
  }
}

const Post =(props)=>{
  return (<tbody>
      {props.posts.map(post => (
        <tr className="text-left" key={post.id}>
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.body}</td>
        <td><button className="btn btn-warning">
        <Link to={"/Comments/"+post.id+"/"+post.title}>view comments</Link>
        </button></td></tr>

      ))}
      </tbody>);

}
export default Posts;