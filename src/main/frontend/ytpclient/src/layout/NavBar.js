import React from 'react'
import { Link } from 'react-router-dom'
import store from '../store'
import axios from 'axios';
import Logout from '../views/Logout';
import { useSelector } from 'react-redux';

export default function NavBar() {
  const loggedUser = store.getState().loggedUser;
  const isAdmin = loggedUser.role === "ADMIN";

  return (
    <div>
      <nav class="navbar navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="/home">YTPublisher</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Welcome {loggedUser.name}</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/home">Main</Link>
                </li>
                <li>
                  <Link className="btn btn-dark" to="/">Profile</Link>
                </li>
                {isAdmin &&               
                <li>
                  <Link className="btn btn-dark" to="/users">Users</Link>
                </li>
                }
                {!isAdmin &&               
                <li>
                  <Link className="btn btn-dark" to="/users">New Topic</Link>
                </li>
                }
                <li>
                <Link class="btn btn-dark" onClick={() => Logout.apply()}>Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
