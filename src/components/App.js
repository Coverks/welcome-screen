import './App.css';
import React, { Component } from 'react';
import Websocket from 'react-websocket';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTemperature } from '../actions/';

class App extends Component {
	state = {
		count: 90,
		text: 'Text here!',
	};

	handleData( data ) {
		let result = JSON.parse( data );
		console.log( data );
		var d = new Date( result.data.time );
		this.setState( { count: d.toLocaleString(), text: result.data.text } );
	}

	handleClick = () => {
		this.props.fetchTemperature();
	}

	render() {
		return (
			<div className="App">
				<div className="video section">
					<video autoPlay muted
						   poster="http://via.placeholder.com/1280x720/ffd039/ffffff?Text=Coverks"
					>
						<source src="logo.mp4" type="video/mp4"/>
						Your browser can not play video
					</video>
					<div className="section">
						<h1>Welcome!</h1>
						<h2>{ this.state.text }</h2>
						{ this.props.outside.map( ( value, label ) => {
							return <div key={ label }>{ value }</div>
						} ) }
						<button onClick={ this.handleClick }>Button</button>

						<Websocket url='ws://localhost:1337/'
								   onMessage={ this.handleData.bind( this ) }/>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(
	state => ( {
		outside: state.telldus.outside || []
	} ),
	dispatch => bindActionCreators( {
		fetchTemperature,
	}, dispatch )
)( App );
