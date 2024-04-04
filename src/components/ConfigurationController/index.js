// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

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
        <>
          <h1>Layout</h1>
          <ul>
            <li>
              <input
                type="checkbox"
                id="content"
                onClick={onToggleShowContent}
                checked={showContent}
              />
              <label htmlFor="content">Content</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="left-navbar"
                onClick={onToggleShowLeftNavbar}
                checked={showLeftNavbar}
              />
              <label htmlFor="left-navbar">Left Navbar</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="right-navbar"
                onClick={onToggleShowRightNavbar}
                checked={showRightNavbar}
              />
              <label htmlFor="right-navbar">Right Navbar</label>
            </li>
          </ul>
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
