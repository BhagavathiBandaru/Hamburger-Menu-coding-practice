// Write your code here

import Header from '../Header'

import './index.css'

const About = () => (
  <div className="about-container">
    <Header />
    <div className="img-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="About"
        className="about-img-for-mobile"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="About"
        className="about-img-for-desktop"
      />
    </div>
  </div>
)

export default About
