import React, { Component } from 'react';
import moment from 'moment'
import PropTypes from 'prop-types'
import './Game.css'
import { Button, CircularProgress, ClickAwayListener } from '@material-ui/core';
import { tsExpressionWithTypeArguments } from '@babel/types';

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
        this.end = moment().add(10, 's');
        this.max = moment.duration(moment().diff(this.end)).asMilliseconds() *-1;
        this.test = 0;
    }

    componentDidMount() {
        this.context.loop.subscribe(this.update);
      }
    
      componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
      }
    
      update() {
        if(this.test < 100)
        this.test = 100 - (moment.duration(moment().diff(this.end)).asMilliseconds() *-1 * 100 / this.max) 
          this.setState({x: this.test, y:this.state.y+1})
      };

      click(){
        this.end = moment().add(10, 's');
        this.max = moment.duration(moment().diff(this.end)).asMilliseconds() *-1;
        this.test = 0;
      }

    render() {
        return ( 
          <div className="game-container">
            <Button onClick={this.click.bind(this)}>Test</Button>
            <CircularProgress classes="loader" variant="static" value={parseInt(this.state.x)} thickness={8} />
          </div>
        );
    }
}
export default Game;
