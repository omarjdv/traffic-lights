import React, { Component } from 'react';
import Lights from '../Ligths';
import './styles.css';

class TrafficLights extends Component {
  state = {
    active: 'all',
    activeLoop: null,
  }

  componentDidMount() {
    setTimeout(() => {
      this.activateLoop(0);
    }, 5000);
  }

  next = (nextIndex, duration) => {
    setTimeout(() => {
      this.activateLoop(nextIndex);
    }, duration);
  }

  activateLoop = (index) => {
    const { loops } = this.props;
    const loopToActivate = loops[index];
    const nextIndex = index + 1 === loops.length ? 0 : index + 1;
    const duration = parseInt(loopToActivate.duration) * 1000;

    this.setState({
      activeLoop: index,
      active: loopToActivate.color,
    });

    this.next(nextIndex, duration);
  }

  render() {
    const { active } = this.state;

    return (
      <div className='trafficligths'>
        <Lights
          color='R'
          active={active === 'all' || active === 'R'}
        />
        <Lights
          color= 'Y'
          active={active === 'all' || active === 'Y'}
        />
        <Lights
          color= 'G'
          active={active === 'all' || active === 'G'}
        />
      </div>
    );
  }
}

export default TrafficLights;
