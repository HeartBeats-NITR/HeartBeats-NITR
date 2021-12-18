import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo-inverted.png';
import './Home.css';
const Home= () =>{
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
              <div className="row">
                  <div className='col-10 mx-auto'>
                    <div className='row'>
                    <div className="col-md-12 col-lg-6 pt-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <div className="pl-md-4 pixelScreen">
                          <h1>Join us at <a className='textprimary' href='/'>HeartBeats</a></h1>
                          <h2>The Official Fusion Band of NIT Rourkela</h2>
                            <NavLink to="/inductions" className="btn btn-started mt-4 ml-3">Sign Up for Inductions!</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 order-1 order-lg-2">
                      <img src={logo} className="App-logo d-flex mx-auto" alt="alternate"/>
                    </div>
                  </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
export default Home;