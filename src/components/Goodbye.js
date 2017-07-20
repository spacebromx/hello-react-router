import React, {Component} from 'react';

class Goodbye extends Component {
    render() {
        return (
            <div>
                <h1>Goodbye {this.props.match.params.name}!</h1>
            </div>
        );
    }
}

export default Goodbye;
