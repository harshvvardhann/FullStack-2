import React from 'react'
import PropTypes from 'prop-types'
import { Outlet, Link } from "react-router-dom";

// passing the title as props so that for every different part of website or for different websites we don't need to create more files and just pass the title from that file and with just this single file we can do the changes for title.
export default function Navbar(props) {

  return (
    // the reason we are adding the whole navbar code here is that in our main component it won't get mixed up so that we just rendered the Navbar component there manually so that we can use this component for later on purpose for other websites as well by only rendering this Navbar file in the main component.
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">

        {/* Replacing the anchor tag with the Link tag for Router so that if the About get's clicked the Router will route to About page */}
        <Link className="navbar-brand" to="/about">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          <div className={`form-check form-switch mx-3 text-${props.mode=='light'? 'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" for="flexSwitchCheckDefault">Enable {`${props.mode=='light'? 'Dark':'Light'}`} Mode</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-danger" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

// here we are defining the prop types of which props we have sent from App to Navbar.. and defining so that in future we don't pass any wrong values and isRequired is used so that the props for title is necessary and if still we didn't pass then we will get undefined error on console.
Navbar.propTypes = { title: PropTypes.string.isRequired, aboutText: PropTypes.string }

// default props so that if we haven't passed any props then it will take this.
Navbar.defaultProps = {
  title: 'Default Title is Harsh',
  aboutText: 'Default About Text is Harsh'
}