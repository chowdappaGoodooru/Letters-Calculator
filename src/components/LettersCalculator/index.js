// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  textChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
        <div className="bottom-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label-txt" htmlFor="phraseText">
            Enter the phrase
          </label>
          <input
            type="text"
            className="input-text"
            id="phraseText"
            placeholder="Enter the phrase"
            onChange={this.textChange}
          />
          <p className="count-container">No.of letters: {searchInput.length}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
