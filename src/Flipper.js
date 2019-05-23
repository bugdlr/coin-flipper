import React, { Component } from 'react';
import Coin from './Coin';
import "./Coin.css"

class Flipper extends Component {
  static defaultProps = {
    faces: [
      {side: 'heads', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'},
      {side: 'tails', imgSrc: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg'}
    ]
  }

  constructor(props) {
    super(props);
    this.state = {
      face: null,
      flips: 0,
      heads: 0,
      tails: 0
    }

    this.handleClick = this.handleClick.bind(this);
  }

  randomSide() {
    return this.props.faces[Math.floor(Math.random() * 2)];
  }

  handleClick() {
    const newFace = this.randomSide();
    this.setState(st => {return {
      flips: st.flips + 1,
      face: newFace,
      heads: st.heads + (newFace.side === "heads" ? 1 : 0),
      tails: st.tails + (newFace.side === "tails" ? 1 : 0)
    }})
  }


  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        {this.state.face && <Coin data={this.state.face}/>}
        <button onClick={this.handleClick}>FLIP IT!</button>
        <div className="count-box">
          <p>Heads: {this.state.heads}</p>
          <p>Tails: {this.state.tails}</p>
        </div>
        <p>Total Flips: {this.state.flips}</p>
      </div>
    )
  }
}

export default Flipper;
