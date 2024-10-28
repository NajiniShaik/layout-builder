import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      return (
        <nav className="navbar">
          <div className="navbar-container">
            <h1 className="navbar-title">Layout</h1>
            <div className="input-card">
              <input
                type="checkbox"
                id="content"
                className="checkbox"
                onChange={onToggleShowContent}
                checked={showContent}
              />
              <label htmlFor="content" className="label">
                Content
              </label>
            </div>
            <div className="input-card">
              <input
                type="checkbox"
                id="leftNavbar"
                className="checkbox"
                onChange={onToggleShowLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="leftNavbar" className="label">
                Left Navbar
              </label>
            </div>
            <div className="input-card">
              <input
                type="checkbox"
                id="rightNavbar"
                className="checkbox"
                onChange={onToggleShowRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="rightNavbar" className="label">
                Right Navbar
              </label>
            </div>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
