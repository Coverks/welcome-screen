import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {
        counter: 1,
    };

    buttonClick = () => {
        this.setState((prevState, props) => {
            return {counter: prevState.counter + 1};
        });

    };

    render() {

        return (
            <div className="App">
                <h1 className="App-title">Coverks</h1>
                <p className="text">{this.state.counter}</p>
                <button onClick={this.buttonClick}>Press me!</button>
            </div>
        );
    }
}

export default App;
