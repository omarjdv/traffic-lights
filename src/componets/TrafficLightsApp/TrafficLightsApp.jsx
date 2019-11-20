import React, { Component } from 'react';
import './styles.css';

import TrafficLights from '../TrafficLights';

class TrafficLightsApp extends Component {
  state = {
    static: [
      {
        color: 'R',
        duration: '5s',
      },
      {
        color: 'Y',
         duration: '2s',
      },
      {
        color: 'G',
         duration: '5s',
      },
    ],
    dinamic: [],
  }

  async componentDidMount() {
    const response = await fetch('https://api-pre.americadigital.com.ar/contents/semaphore/random');
    const { data } = await response.json();

    this.setState({
      dinamic: data,
    });
  }

  render() {
    return (
      <div className="trafficLightsAppContainer">
        <div className="children">
          <h3>Ejercicio 1</h3>
          <TrafficLights loops={this.state.static} />
        </div>
        <div className="children">
          <h3>Ejercicio 2</h3>
          {this.state.dinamic.length &&
            <TrafficLights loops={this.state.dinamic} />
          }
        </div>
      </div>
    )
  }
}

export default TrafficLightsApp;
