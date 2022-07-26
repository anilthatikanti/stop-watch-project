// Write your code here
import {Component} from 'react'

import './index.css'

const initialState = {counter: 0, isStart: false}

class Stopwatch extends Component {
  state = initialState

  startStopWatch = () => {
    const {isStart} = this.state
    if (isStart === false) {
      this.timerId = setInterval(() => {
        this.setState(prevState => ({
          counter: prevState.counter + 1,
          isStart: true,
        }))
      }, 1000)
    }
  }

  stopStopWatch = () => {
    const {isStart} = this.state
    if (isStart) {
      clearInterval(this.timerId)
    }
    this.setState({isStart: false})
  }

  resetStopWatch = () => {
    clearInterval(this.timerId)
    this.setState(initialState)
  }

  render() {
    const {counter} = this.state
    const min = Math.floor(counter / 60)
    const sec = Math.floor(counter % 60)
    const Minutes = min > 9 ? min : `0${min}`
    const Seconds = sec > 9 ? sec : `0${sec}`

    return (
      <div className="container">
        <div className="BgContainer">
          <div className="card">
            <h1>Stopwatch</h1>
            <div className="cardStyle">
              <div className="timerHeading">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                />
                <p>Timer</p>
              </div>
              <h1 className="counter">
                {Minutes}:{Seconds}
              </h1>
              <div className="buttonSection">
                <button
                  type="button"
                  className="btn startBtn"
                  onClick={this.startStopWatch}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="btn stopBtn"
                  onClick={this.stopStopWatch}
                >
                  Stop
                </button>
                <button
                  type="button"
                  className="btn resetBtn"
                  onClick={this.resetStopWatch}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
