// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  generateRandomNumber = () => {
    const randomNumber = this.getRandomNumber()
    this.setState({count: randomNumber})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="head1">Random Number</h1>
          <p className="para1">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="para2">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
