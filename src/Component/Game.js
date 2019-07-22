import React, { Component } from 'react';
import moment from 'moment'
import PropTypes from 'prop-types'
import './Game.css'
import { Button, CircularProgress } from '@material-ui/core';

class Game extends Component {

    static contextTypes = {
        loop: PropTypes.object,
      };

    constructor(props){
        super(props);
        moment.locale('fr')
        this.state = {
          x: 10,
          y: 0
        }
        this.update = this.update.bind(this)
    }

    componentDidMount() {
        this.context.loop.subscribe(this.update);
      }
    
      componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
      }
    
      update() {
        let x = this.state.x +0.5;
        if(x < 101){
          this.setState({x: x, y:this.state.y+1})
        }
      };

    render() {
        return ( 
          <div className="game-container">
            <Button>Test</Button>
            <CircularProgress classes="loader" variant="static" value={parseInt(this.state.x)} thickness={8} />
          </div>
        );
    }
}
export default Game;
