import React from 'react'
import { Link } from 'gatsby'
import screenshot from '../images/Month_View.png'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div>
      <div className="Hero">
        <div className="HeroContainer">
          <div className="HeroImage">
            <img src={screenshot} />
          </div>
          <div className="HeroGroup">
            <h1>Commit to new habits today!</h1>
            <p>The Commit App helps you commit to new habits, not just track them.</p>
            <p>We’re not the first habit app.<br></br> We’re the best!</p>
            <Link to="/page-2/">Download</Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
