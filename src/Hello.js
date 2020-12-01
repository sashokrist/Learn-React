import React, { Component} from 'react';
import './Hello.css';

class Hello extends Component {
    render() {
        return (
            <div className='f1 tc v-mid'>
                <h1>Hi Sasho</h1>
                <p>React is awesome</p>
                <p>{this.props.greeting}</p>
            </div>

        )
    }
}

export default Hello
