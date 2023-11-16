import React, { useState } from 'react'; //import React Component

export function NavBlog(props) {
  const liCards = props.building.map((building) => {
    const element = <p key= {building}>{building}</p>
    return element;
  });

  return (
    <nav className="filter navbar navbar-expand-lg">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li key={"noise-level"} className="dd nav-item dropdown">
            <a className="ddm nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Noise Level
            </a>
            <ul className="dropdown-menu">
              <li key={"Silent"}><a className="dropdown-item" href="filter_custom.html">Silent</a></li>
              <li key={"Whisper"}><a className="dropdown-item" href="filter_custom.html">Whisper</a></li>
              <li key={"Table Talk"}><a className="dropdown-item" href="filter_custom.html">Table Talk</a></li>
              <li key={"Normal"}><a className="dropdown-item" href="filter_custom.html">Normal</a></li>
              <li key={"Presenter"}><a className="dropdown-item" href="filter_custom.html">Presenter</a></li>
              <li key={"Outsider"}><a className="dropdown-item" href="filter_custom.html">Outside</a></li>
            </ul>
          </li>
          <li key={"party-size"} className="dd nav-item dropdown">
            <a className="ddm nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Party Size
            </a>
            <ul className="dropdown-menu">
              <li key={1}><a className="dropdown-item" href="filter_custom.html">1</a></li>
              <li key={2}><a className="dropdown-item" href="filter_custom.html">2</a></li>
              <li key={3}><a className="dropdown-item" href="filter_custom.html">3</a></li>
              <li key={4}><a className="dropdown-item" href="filter_custom.html">4</a></li>
              <li key={5}><a className="dropdown-item" href="filter_custom.html">5</a></li>
              <li key={6}><a className="dropdown-item" href="filter_custom.html">6+</a></li>
            </ul>
          </li>
          <li key={"location"} className="dd nav-item dropdown">
            <a className="ddm nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              Location
            </a>
            <ul className="dropdown-menu">
              <li key={"area"} style={{textAlign: 'center'}}>Area</li>
              <li key={"divider-1"}>
                <hr className="dropdown-divider" />
              </li>
              <li key={"North"}><a className="dropdown-item" href="filter_custom.html">North</a></li>
              <li key={"South"}><a className="dropdown-item" href="filter_custom.html">South</a></li>
              <li key={"East"}><a className="dropdown-item" href="filter_custom.html">East</a></li>
              <li key={"West"}><a className="dropdown-item" href="filter_custom.html">West</a></li>
              <li key={"divider-2"}>
                <hr className="dropdown-divider" />
              </li>
              <li key={"building"} style={{textAlign: 'center'}}>Building</li>
              <li key={"divider-3"}>
                <hr className="dropdown-divider" />
              </li>
              {liCards}
            </ul>
          </li>
          <form className="d-flex" role="search">
            <input className="ss form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="ss btn btn-outline-success" type="submit">Search</button>
          </form>
        </ul>
      </div>
    </nav>
  );
}
