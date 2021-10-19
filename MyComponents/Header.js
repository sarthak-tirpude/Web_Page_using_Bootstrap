import React from 'react'

export default function Header() {
    return (
        <div className="p-3 mb-2 bg-dark text-white">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3 mb-2 bg-dark text-white">
        <div className="container-fluid p-3 mb-2 bg-dark.bg-gradient text-white">
    <a className="navbar-brand text-white" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
        >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Projects</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Events
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Campaigns</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About Us</a>
        </li>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success text-white" type="submit">Search</button>
      </form>
       
      </ul>
      
    </div>
  </div>
</nav>    
        </div>
    )
}
