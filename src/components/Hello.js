import React, {Component} from 'react';

class Hello extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.match.params.name}</h1>
            </div>
        );
    }
}

export default Hello;
