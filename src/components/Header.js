import { NavLink } from 'react-router-dom'

function Header() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className='container'>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className='navbar-nav'>
              <li className="nav-item"><NavLink className="nav-link" to="/">MAIN</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/note">NOTE</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/create">CREATE</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/about">ABOUT US</NavLink></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Header;