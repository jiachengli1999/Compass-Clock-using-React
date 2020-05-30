import React, { Component } from 'react'
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state = ({
      hour: 0,
      minute: 0,
      second: 1,
      timeOfDay: "Welcome"
    })
  }

  componentDidMount(){
    // update state every second
    setInterval(() => {
      let time = new Date()
      let day = "None"
      if (time.getHours() > 7 && time.getHours() < 12) {
        day = "Good Morning!"
      }
      else if (time.getHours() >= 12 && time.getHours() < 17){
        day = "Good Afternoon!"
      }
      else if (time.getHours() >= 17 && time.getHours() < 20){
        day = "Good Evening!"
      }
      else{
        day = "Good Night!"
      }
      this.setState({
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds(),
        timeOfDay: day,
      })
    }, 1000)
  }

  // Get an array of vals from 1 to size
  secondsArray = length => Array.from({length}).map((val, index) => index).map(val => val+1);
  // Get an array of vals from 0 to size-1
  array = length => Array.from({length}).map((val, index) => index)

  render(){
    return(
      <div className='App'>
        <header className="App-header"
        style={{backgroundColor: `${
        (this.state.hour > 7  && this.state.hour < 12) ? "#FFFACD" :
        (this.state.hour >= 12  && this.state.hour < 17) ? "orange" :
        (this.state.hour >= 17  && this.state.hour < 20) ? "#87CEFA" : "#BD91DE"}`}}>
          <div className='appName'>
            <div className='appName'>
              {this.state.timeOfDay}
            </div>
          </div>
          <div className='Circle'>
            {this.array(24).map((val, index) => {
              return (
                <div key={index}
                className={`hour hand ${val===(this.state.hour)?"on":""}`}
                style={{transform: `rotate(${val*(360/24)-(360/24)*(this.state.hour)}deg)`}}>
                  {`${val} hr`}
                </div>
              )
            })}

            {this.array(60).map((val, index) => {
              return (
                <div key={index}
                className={`minute hand ${val===(this.state.minute)?"on":""}`}
                style={{transform: `rotate(${val*(360/60)-(360/60)*(this.state.minute)}deg)`}}>
                  {`${val} min`}
                </div>
              )
            })}

          {this.secondsArray(60).map((val, index) => {
              return (
                <div key={index}
                className={`second hand ${val===(this.state.second)?"on":""}`}
                style={{transform: `rotate(${val*(360/60)-(360/60)*(this.state.second)}deg)`}}>
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