import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import App from './App';
 import Demo from './components/Demo';
  import Hellomsg from './components/Hellomsg';
 import Timer from './components/Timer';
 import users from './components/Users';
import Navbar from './components/Navbar';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Albums from './components/Albums';
import Photos from './components/Photos';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route} from 'react-router-dom'

ReactDOM.render(
<BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
      <Route exact path="/" component={App}/>
      
      <Route path="/Demo" component={Demo}/>
      <Route path="/Timer" component={Timer}/>
      <Route path="/Users" component={users}/>
      <Route path="/Posts/:id/:name" component={Posts}/>
      <Route path="/Comments/:id/:comments" component={Comments}/>
      <Route path="/Albums/:id/:album" component={Albums}/>
      <Route path="/Photos/:id/:photos" component={Photos}/>
      <Route path="/Hellomsg" component={Hellomsg}/>
     
      
    </div>
    </BrowserRouter>
    ,document.getElementById('root'));



//  ReactDOM.render(
// <Hellomsg name="hari" />,
 //     document.getElementById('root')
//   );


// ReactDOM.render(<Timer></Timer>, document.getElementById('root'));
   

// ReactDOM.render(<Demo />, document.getElementById('root'));
// ReactDOM.render(<Hellomsg />, document.getElementsByName('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
