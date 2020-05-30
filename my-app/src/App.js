import React, { Component } from 'react'
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state = ({
      hour: 1,
      minute: 1,
      second: 1,
    })
  }

  componentDidMount(){
    // update state every second
    setInterval(() => {
      let time = new Date()
      this.setState({
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
      })
    }, 1000)
  }

  // Get an array of vals from 1 to size
  // use for div key and calculating angle
  array = length => Array.from({length}).map((val, index) => index).map(val => val+1);

  render(){
    return(
      <div className='App'>
        <header className="App-header">
          <div className='appName'>
            <h1 className='appName'>Stop Watch</h1>
          </div>
          <div className='Circle'>
            {this.array(24).map((val, index) => {
              return (
                <div key={index}
                className={`hour hand ${val===(this.state.hour)?"on":""}`}
                style={{transform: `rotate(${index*(360/24)-(360/24)*(this.state.hour-1)}deg)`}}>
                  {`${val} hr`}
                </div>
              )
            })}

            {this.array(60).map((val, index) => {
              return (
                <div key={index}
                className={`minute hand ${val===(this.state.minute)?"on":""}`}
                style={{transform: `rotate(${index*(360/60)-(360/60)*(this.state.minute-1)}deg)`}}>
                  {`${val} min`}
                </div>
              )
            })}

          {this.array(60).map((val, index) => {
              return (
                <div key={index}
                className={`second hand ${val===(this.state.second)?"on":""}`}
                style={{transform: `rotate(${index*(360/60)-(360/60)*(this.state.second-1)}deg)`}}>
                  {`${val} sec`}
                </div>
              )
            })}
          </div>
        </header>
      </div>
    );
  }
}

export default App;