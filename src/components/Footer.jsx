import React from 'react'

function Footer () {
    return (
    <footer className="footer">
    <div className="content has-text-centered">
      <p>Copyright © {new Date().getFullYear()}</p>
    </div>
  </footer>
    )
}

export default Footer;
