import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { authenticated } = this.props;

    return (
      <nav className="navbar navbar-light">
        <Link className="navbar-brand" to="/">Redux Auth</Link>
        <ul className="nav navbar-nav">
          {!authenticated && [
            <li className="nav-item" key="1">
              <Link className="nav-link" to="/signin">Sign in</Link>
            </li>,
            <li className="nav-item" key="2">
              <Link className="nav-link" to="/signup">Sign up</Link>
            </li>
          ]}
          {authenticated &&
            <li className="nav-item">
              <Link className="nav-link" to="/signout">Sign out</Link>
            </li>
          }
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth: { authenticated } }) => ({
  authenticated,
});

export default connect(mapStateToProps)(Header);
