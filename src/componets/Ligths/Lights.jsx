import React from 'react';
import './style.css';

const Lights = ({ color, active }) => {
  let styleColor = '';
  const styleActive = active ? '' : 'off';

  if (color === 'G') {
    styleColor = 'green';
  }

  if (color === 'R') {
    styleColor = 'red'
  }

  if (color === 'Y') {
    styleColor = 'yellow'
  }

  return (
    <div className={`circle ${styleColor} ${styleActive}`} />
  );
}

export default Lights;
