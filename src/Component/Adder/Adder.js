import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core';

class Adder extends Component {

    static contextTypes = {
        loop: PropTypes.object,
      };

    constructor(props){
        super(props);
        this.update = this.update.bind(this)
    }

    componentDidMount() {
        this.context.loop.subscribe(this.update);
      }
    
    componentWillUnmount() {
        this.context.loop.unsubscribe(this.update);
    }

    update() {
      //nothing?
    }

    click(){
      this.props.add();
    }

    render() {
        return ( 
          <div className="adder-container">
            <Button onClick={this.click.bind(this)}>Ajouter Loader</Button>
          </div>
        );
    }
}
export default Adder;
