import React, {useState} from 'react'


function Header () {

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">

<div className="hero-body">
        <p className="title">WealthWave</p>
        <p className="subtitle">Your Personal Finance Tracker</p>
      </div>

  

    <div className="navbar-end">
      <div className="navbar-item">
        <p>Username</p>
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  
</nav>
    )
}

export default Header;