import React, { Component } from 'react';
import moment from 'moment'
import PropTypes from 'prop-types'
import './Game.css'
import { Button, CircularProgress, ClickAwayListener } from '@material-ui/core';
import { tsExpressionWithTypeArguments, tsParenthesizedType } from '@babel/types';
import Loader from './Loader/Loader.js';
import Count from './Count/Count';
import Adder from './Adder/Adder';

class Game extends Component {

    static contextTypes = {
        loop: PropTypes.object,
      };

    constructor(props){
      super(props);
      moment.locale('fr')
      this.state = {
        count: false,
        adder: true,
        loader: 1
      }
      this.update = this.update.bind(this)
      this._count= 0;
      this._loader= 1;
    }

    componentDidMount() {
      this.context.loop.subscribe(this.update);
    }

    componentWillUnmount() {
      this.context.loop.unsubscribe(this.update);
    }

    update() {
    }

    getCount() {
      return this._count;
    }

    addLoader(){
      this._loader+=1;
      this.setState({loader:this._loader})
    }

    finish() {
      this._count+=1;
      if(this._count === 1){
        this.setState({count: true});
      }
      if(this._count === 10){
        this.setState({adder: true});
      }
    }

    getCountComponent(){
      if(this.state.count) {
        return (
          <Count updater={this.getCount.bind(this)}></Count>
        )
      } else {
        return '';
      }
    }

    getAdderComponent(){
      if(this.state.adder) {
        return (
          <Adder add={this.addLoader.bind(this)}></Adder>
        )
      } else {
        return '';
      }
    }

    getLoaders(){
      let loaders = [];
      for (let i = 0; i < this._loader; i++) {
        loaders.push(<Loader seconds={10} finish={this.finish.bind(this)}></Loader>);
      }
      return loaders;
    }

    render() {
      return ( 
        <div className="game-container">
          {this.getCountComponent()}
          {this.getAdderComponent()}
          {this.getLoaders()}
        </div>
      );
    }
}
export default Game;
