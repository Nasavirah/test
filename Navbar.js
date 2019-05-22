import React from 'react';
import {Link , NavLink,withRouter} from 'react-router-dom';

  class Navbar extends React.Component {
    render() {
      return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3">
        <div className="container">
          <Link className="navbar-brand" to="/">Learn React</Link>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link className="nav-link btn" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link btn" to="/Timer">Timer</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link btn" to="/Demo">Demo</NavLink>
                  </li>
                  <li className="nav-item">
                      <NavLink className="nav-link btn" to="/Hellomsg">Hellomsg</NavLink>
                  </li>             
                  <li className="nav-item">
                      <NavLink className="nav-link btn" to="/Navbar">NavBar</NavLink>
                  </li>       
                  <li className="nav-item">
                      <NavLink className="nav-link btn" to="/Users">user</NavLink>
                  </li> 
              </ul>
            </div>
          </div>
    </nav>
      );
    }
  }
  
  // ReactDOM.render(
  //   <Timer />,
  //   document.getElementById('timer-example')
  // );
  export default Navbar;
  