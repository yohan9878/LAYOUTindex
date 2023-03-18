import React from "react";

function Header(){
    
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="">LAYOUTindex</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="addLocation">Add Location</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="addDevice">Add Device</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="allLocations">View Location</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="allDevices">View Device</a>
            </li>

          </ul>
        </div>
        <form class="form-inline">
    {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
  </form>
      </nav>

    )
}

export default Header;