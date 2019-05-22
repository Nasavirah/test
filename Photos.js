import React, { Component } from 'react';
import axios from 'axios';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = { photos: [] }
  }

  componentDidMount() {
    axios('https://jsonplaceholder.typicode.com/photos?albumId='+ this.props.match.params.id)
      .then(res => { console.log(res.data); this.setState({ photos: res.data})  });
  }

  handleClick=()=>{this.props.history.push("/Albums?albm.id='+ this.props.match.params.id")}
  render() {
    return (
      <div className="container">
      <button type="button" onClick={this.handleClick} className="btn btn-danger">
          Back
        </button>

        <h4 className="text-white p-3">Photos</h4>
        <Phototb1 photoList={this.state.photos} username={this.state.uname}></Phototb1>
      </div>)
  }
}
const Phototb1 = (props) => {
    return <div className="row">
      {
        props.photoList.length > 0 ?
          <div className="card-body container mx-auto m-3">
            <div className="row mx-auto">
              <table className="bg-dark text-white text-left table mt-1 table-striped bg-light mx-auto">
                <thead><tr><th>#</th><th>img</th></tr></thead>
                <tbody>
                  {props.photoList.map((photos) => <tr className="link hstrike" key={photos.id}>
                    <td>{photos.id}</td>
                    <td><img src={photos.thumbnailUrl} width="50px" height="50px" /></td>
                    </tr> )}
                </tbody>
               </table>
            </div>
          </div>
        : <div className=" text-light">No albums in the List</div>
    }
</div>
  }
export default Photos;