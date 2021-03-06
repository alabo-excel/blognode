import '../App.css';
import logo from '../assets/logo.png'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Header extends Component {
  render(props){
    return (
      <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img id="logo" src={logo} alt="..." />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto mr-5">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle mr-5" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              News
            </button>
            <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Trending News</a>
              <a className="dropdown-item" onClick={this.props.business} >Business</a>
              <a className="dropdown-item" onClick={this.props.sports} >Sports</a>
            </div>
          </div>
            </div>
        </div>
      </nav>
      </div>
    );
  }
}

export default Header;
