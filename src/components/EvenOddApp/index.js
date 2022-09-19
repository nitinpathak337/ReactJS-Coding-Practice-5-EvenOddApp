// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0, even: 'yes'}

  increment = () => {
    const {count} = this.state
    const randomNumber = Math.ceil(Math.random() * 100)
    const even = (randomNumber + count) % 2 === 0 ? 'yes' : 'no'
    this.setState(prevState => ({
      count: prevState.count + randomNumber,
      even,
    }))
  }

  render() {
    const {count, even} = this.state
    const text = even === 'yes' ? 'Even' : 'Odd'
    return (
      <div className="bg">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          <p className="para1">Count is {text}</p>
          <button className="button" type="button" onClick={this.increment}>
            Increment
          </button>
          <p className="para2">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
