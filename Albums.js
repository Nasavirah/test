import React, { Component } from 'react';
import axios from 'axios';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Albums extends Component {
  constructor(props) {
    super(props);
    this.state = { album: [] }
  }
  componentDidMount() {
    axios('https://jsonplaceholder.typicode.com/albums?userId='+ this.props.match.params.id)
      .then(res => { console.log(res); this.setState({ album: res.data})  });
  }
  handleClick=()=>{this.props.history.push('/Users')}
  render() {
    return (
      <div className="container">
      
        <button type="button" onClick={this.handleClick} className="btn btn-danger">
          Back
        </button>
        <h4 className="text-white p-3">album list</h4>
        <Albumtb1 albumList={this.state.album} username={this.state.uname}></Albumtb1>
      </div>)
  }
}
const Albumtb1 = (props) => {
  return <div className="row">
    {
      props.albumList.length > 0 ?
        <div className="card-body container mx-auto m-3">
          <div className="row mx-auto">
            <table className="bg-dark text-white text-left table mt-1 table-striped bg-light mx-auto">
              <thead><tr><th>#</th><th>title</th>
              <th>view photos</th></tr></thead>
              <tbody>
                {props.albumList.map((albm) => <tr className="link hstrike" key={albm.id}>
                  <td>{albm.id}</td>
                  <td>{albm.title}</td>
                  <td><button className="btn btn-secondary">
                <NavLink to={"/Photos/"+albm.id+"/"+albm.title}>view photos</NavLink>
                </button></td>
                  </tr> )}
              </tbody>
             </table>
          </div>
        </div>
            : <div className=" text-light">No albums in the List</div>
            }
  </div>
          }
  export default Albums;