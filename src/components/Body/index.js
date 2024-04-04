// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div>
          {showLeftNavbar ? (
            <div>
              <h1>Left NavBar Menu</h1>
              <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div>
              <h1>Content</h1>
              <p>Lorem ipsum</p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div>
              <h1>Right NavBar </h1>
              <p>Ad 1</p>
              <p>Ad 2</p>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
