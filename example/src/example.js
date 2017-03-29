var React = require('react');
var ReactDOM = require('react-dom');
var ReactRokuRemoteControl = require('react-roku-remote-control');

var App = React.createClass({
	render () {
		return (
			<div>
				<ReactRokuRemoteControl ip="192.168.1.154" />
			</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
