import React from 'react'

const Navbar = ({alexis}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand text-uppercase" href="/">{alexis}</a>
      </div>
   </nav>
  )
}

export default Navbar