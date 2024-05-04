import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

export default class State extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    handleDecrement = () => {
        this.setState({
            count: this.state.count - 1,
        })
    }
    
    render(){
        const { count } = this.state;
        return (
            <div>
                <h1>{count}</h1>
                <Button onClick={this.handleIncrement} className="me-2" variant="primary"> + </Button>
                <Button onClick={this.handleDecrement} disabled={count === 0 ? true : false} variant="warning"> - </Button>
            </div>
        );
    }
}
