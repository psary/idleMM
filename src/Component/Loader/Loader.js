import React, { Component } from 'react';
import moment from 'moment'
import PropTypes from 'prop-types'
import './Loader.css'
import { CircularProgress } from '@material-ui/core';

class Loader extends Component {

    static contextTypes = {
        loop: PropTypes.object,
      };

    constructor(props){
        super(props);
        moment.locale('fr')
        this.state = {
            percent: 0
        }
        this.update = this.update.bind(this)
        this.init();
    }

    init(){
        this.end = moment().add(this.props.seconds, 's');
        this.max= moment.duration(moment().diff(this.end)).asMilliseconds() *-1;
        this.currentPercent = 0;
    }

    componentDidMount() {
        this.context.loop.subscribe(this.update);
      }
    
      componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
      }
    
      update() {
          let now = moment();
        if(this.end > now){
            this.currentPercent = 100 - (moment.duration(now.diff(this.end)).asMilliseconds() *-1 * 100 / this.max) 
            this.setState({percent: this.currentPercent})
        } else {
            if(this.currentPercent !== 100){
                this.currentPercent = 100;
                this.setState({percent: this.currentPercent})
            }
        }
      }

      click(){
          if(this.currentPercent === 100){
            this.props.finish();
            this.init();
          }
      }

    render() {
        return ( 
          <div className="game-container">
            <CircularProgress className="loader" onClick={this.click.bind(this)} variant="static" value={parseInt(this.state.percent)} thickness={8} />
          </div>
        );
    }
}
export default Loader;
