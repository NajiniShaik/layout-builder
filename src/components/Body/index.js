import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const isActive = showContent ? 'display-content' : 'hide-content'

      const leftNavbarMenu = () => (
        <div className="left-navbar">
          <h1 className="body-header-text">Left Navbar Menu</h1>
          <ul className="list-items">
            <li className="item">Item 1</li>
            <li className="item">Item 2</li>
            <li className="item">Item 3</li>
            <li className="item">Item 4</li>
          </ul>
        </div>
      )

      const rightNavbarMenu = () => (
        <div className="right-navbar">
          <h1 className="body-header-text">Right Navbar</h1>
          <div className="ad-box-container">
            <p className="ad-box">Ad 1</p>
            <p className="ad-box">Ad 2</p>
          </div>
        </div>
      )

      const contentContainer = () => (
        <div className="content">
          <h1 className="body-header-text">Content</h1>
          <p className="content-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar && leftNavbarMenu()}
          {showContent && contentContainer()}
          {showRightNavbar && rightNavbarMenu()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
