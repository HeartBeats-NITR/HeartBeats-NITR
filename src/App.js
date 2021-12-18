// import logo from './logo.png';
import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';

import Navbar from './components/Routes/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Events from './components/Events/Events';
import Members from './components/Members/Members';
import GalleryContainer from './container/GalleryContainer';

import './App.css';
// import {Spin,Space} from 'antd';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/inductions' component={Login}/>
      <Route exact path='/members' component={Members}/>
      <Route exact path='/events' component={Events}/>
      <Route exact path='/gallery' component={GalleryContainer}/>
      <Redirect to='/'/>
    </Switch>
    </>
  );
}

export default App;
