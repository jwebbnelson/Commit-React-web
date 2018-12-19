import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Commit to new habits today!</h1>
        <p>The Commit App helps you commit to new habits, not just track them.</p>
        <p>We’re not the first habit app.<br></br> We’re the best!</p>
        <Link to="/page-2/">Download</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
