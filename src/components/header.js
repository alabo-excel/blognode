import '../App.css';

function Header() {
  return (
    <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <img src="../assets/logo.png" alt="logo img" />
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-link" href="home">Home <span className="sr-only">(current)</span></a>
          <a className="nav-link" href="features">Features</a>        </div>
      </div>
    </nav>
    </div>
  );
}

export default Header;
