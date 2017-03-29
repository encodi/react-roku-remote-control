import React, { Component } from 'react';
import axios from 'axios';

class ReactRokuRemoteControl extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.config = {
      ip: props.ip,
      port: '8060'
    };
	}
	handleClick(e) {
    axios.post('http://'+this.config.ip+':'+this.config.port+'/keypress/'+e.target.name)
    .then(response => {
      console.log('Pressed ' , e.target.name);
    }).catch(error => {

    });
  }
	render () {
		return(
			<div className="roku-remote-control-wrapper container-fluid">
        <div className="row">
          <div className="col-sm-6">
            <button className="btn btn-default" name="Back" onClick={this.handleClick}>Back</button>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-default" name="Home" onClick={this.handleClick}>Home</button>
          </div>
        </div>

        <div role="separator" className="divider"></div>

        <div className="row">
          <div className="col-sm-12">
            <button className="btn btn-default" name="Up" onClick={this.handleClick}>Up</button>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <button className="btn btn-default" name="Left" onClick={this.handleClick}>Left</button>
          </div>
          <div className="col-sm-4">
            <button className="btn btn-default" name="Select" onClick={this.handleClick}>Select</button>
          </div>
          <div className="col-sm-4">
            <button className="btn btn-default" name="Right" onClick={this.handleClick}>Right</button>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <button className="btn btn-default" name="Down" onClick={this.handleClick}>Down</button>
          </div>
        </div>

        <div role="separator" className="divider"></div>

        <div className="row">
          <div className="col-sm-6">
            <button className="btn btn-default" name="InstantReplay" onClick={this.handleClick}>InstantReplay</button>
          </div>
          <div className="col-sm-6">
            <button className="btn btn-default" name="Info" onClick={this.handleClick}>Info</button>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <button className="btn btn-default" name="Rev" onClick={this.handleClick}>Rev</button>
          </div>
          <div className="col-sm-4">
            <button className="btn btn-default" name="Play" onClick={this.handleClick}>Play</button>
          </div>
          <div className="col-sm-4">
            <button className="btn btn-default" name="Fwd" onClick={this.handleClick}>Fwd</button>
          </div>
        </div>

        <div role="separator" className="divider"></div>

        <div className="row">
          <button name="Search" onClick={this.handleClick}>Search</button>
          <button name="Enter" onClick={this.handleClick}>Enter</button>
          <button name="VolumeDown" onClick={this.handleClick}>Volume Down</button>
          <button name="VolumeUp" onClick={this.handleClick}>Volume Up</button>
          <button name="VolumeMute" onClick={this.handleClick}>Mute</button>
          <button name="PowerOff" onClick={this.handleClick}>Power Off</button>
        </div>

      </div>
		);
	}
};
ReactRokuRemoteControl.defaultProps = {
	ip: '192.168.1.154'
};
ReactRokuRemoteControl.propTypes = {
	ip: React.PropTypes.string
};

export default ReactRokuRemoteControl;
