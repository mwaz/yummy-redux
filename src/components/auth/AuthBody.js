import React from 'react';
import NavigationBar from '../common/NavigationBar';
import Register from './Register';
import Login from './Login';
import Category from '../categories/Category';

export const AuthBody = () => (
  <div className="background-layout">
    <NavigationBar />
    <div className="register">
      <div className="row">
        <div className="col s12 m8">
          <div className="card-panel" style={{ backgroundColor: '#5D6D7E' }}>
            <div className="row">
              <div className="col s12">
                <ul className="tabs" style={{ backgroundColor: '#5D6D7E' }}>
                  <li className="tab col s5">
                    <a href="#register">Register </a>
                  </li>
                  <li className="tab col s5">
                    <a className="active" href="#login">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
              <div
                id="register"
                className="col s12"
                style={{ paddingTop: '20px' }}
              >
                {' '}
                <Register />
              </div>
              <div
                id="login"
                className="col s12"
                style={{ paddingTop: '20px' }}
              >
                {' '}
                <Login />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
