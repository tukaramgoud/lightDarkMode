// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: true}

  changeMode = () => {
    this.setState(pervState => ({isLightMode: !pervState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    const backgorundColor = isLightMode ? 'lightBack' : 'darkBack'
    const headingColor = isLightMode ? 'lightMode' : 'darkMode'
    const buttonText = isLightMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className={`background-container ${backgorundColor}`}>
        <h1 className={`heading ${headingColor}`}>Click to change Mode</h1>
        <button type="button" className="button" onClick={this.changeMode}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
