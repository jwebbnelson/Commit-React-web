import React from 'react'
import { Link } from 'gatsby'
import logo from '../images/commit-logo.png'
import './header.css'

const Header = ({ siteTitle }) => (
 <div className="Header">
  <div className="HeaderGroup">
    <Link to="/"><img src={logo} width="80"/></Link>
      <Link to="/">Value Of A Habit</Link>
      <Link to="/">How It Works</Link>
      <Link to="/">Payment </Link>
      <Link to="/"><button>Download</button></Link>
  </div>
 </div>
)

export default Header
