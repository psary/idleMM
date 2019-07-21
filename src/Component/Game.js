import React, { Component } from 'react';
import moment from 'moment'
import PropTypes from 'prop-types'

class Game extends Component {

    static contextTypes = {
        loop: PropTypes.object,
      };

    constructor(props){
        super(props);
        moment.locale('fr')
    }

    componentDidMount() {
        this.context.loop.subscribe(this.update);
      }
    
      componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
      }
    
      update() {
        // tick logic
      };

    render() {
        return ( ''
        );
    }
}
export default Game;
