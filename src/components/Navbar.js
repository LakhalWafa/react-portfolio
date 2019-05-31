import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  state = {
    showMenu: true
  };

  toggleMenu = e => {
    e.preventDefault();
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    const { showMenu } = this.state;
    return (
      <header>
        <div
          className={!showMenu ? 'menu-btn close' : 'menu-btn'}
          onClick={this.toggleMenu}
        >
          <div className="btn-line" />
          <div className="btn-line" />
          <div className="btn-line" />
        </div>
        <nav className={!showMenu ? 'menu show' : 'menu'}>
          <div className={!showMenu ? 'menu-branding show' : 'menu-branding'}>
            <div className="portrait" />
          </div>
          <ul className={!showMenu ? 'menu-nav show' : 'menu-nav'}>
            <li className={!showMenu ? 'nav-item show' : 'nav-item current'}>
              <NavLink to="/" className="nav-link" activeClassName="current">
                Home
              </NavLink>
            </li>
            <li className={!showMenu ? 'nav-item show' : 'nav-item'}>
              <NavLink
                to="/about/"
                className="nav-link"
                activeStyle={{
                  fontWeight: 'bold',
                  color: '#f05356'
                }}
              >
                About Me
              </NavLink>
            </li>
            <li className={!showMenu ? 'nav-item show' : 'nav-item'}>
              <NavLink
                to="/work/"
                className="nav-link"
                activeStyle={{
                  fontWeight: 'bold',
                  color: '#f05356'
                }}
              >
                My Work
              </NavLink>
            </li>
            <li className={!showMenu ? 'nav-item show' : 'nav-item'}>
              <NavLink
                to="/contact/"
                className="nav-link"
                activeStyle={{
                  fontWeight: 'bold',
                  color: '#f05356'
                }}
              >
                How to reach me
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
