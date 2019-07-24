import React, { Component } from 'react';
import moment from 'moment'
import PropTypes from 'prop-types'
import './Game.css'
import { Button, CircularProgress, ClickAwayListener } from '@material-ui/core';
import { tsExpressionWithTypeArguments, tsParenthesizedType } from '@babel/types';
import Loader from './Loader/Loader.js';

class Game extends Component {

    static contextTypes = {
        loop: PropTypes.object,
      };

    constructor(props){
      super(props);
      moment.locale('fr')
      this.state = {
        count: 0
      }
      this.update = this.update.bind(this)
      this._count= 0;
    }

    componentDidMount() {
      this.context.loop.subscribe(this.update);
    }

    componentWillUnmount() {
      this.context.loop.unsubscribe(this.update);
    }

    update() {
      this.setState({count: this._count});
    }

    finish() {
      this._count+=1;
    }

    render() {
      return ( 
        <div className="game-container">
          {this.state.count}
          <Loader seconds={10} finish={this.finish.bind(this)}></Loader>
        </div>
      );
    }
}
export default Game;
