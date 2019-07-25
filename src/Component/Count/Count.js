import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Count extends Component {

    static contextTypes = {
        loop: PropTypes.object,
      };

    constructor(props){
        super(props);
        this.state = {
            count: this.props.updater()
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
        this.setState({count:this.props.updater()});
    }

    render() {
        return ( 
          <div className="count-container">
            {this.state.count}
          </div>
        );
    }
}
export default Count;
