import React from 'react';
import './Coin.css'

const Coin = (props) => {
  return (
    <div className="Coin">
      <img alt={props.data.side} src={props.data.imgSrc}/>
    </div>
  )
}

export default Coin;
