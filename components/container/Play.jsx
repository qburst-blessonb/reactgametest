import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';

export default class Play extends React.Component {
  onSubmitUser() {
    window.location = '/home/blesson/Qburst/test/reacttest/components/html/player.html';
  }
   render() {
    	return (<div>
        <p style = {{textAlign: "center",fontSize:32}}>Names Entering</p>
        <div className="modal-container" style={{textAlign: "center"}}>
          <Button bsStyle="success" bsSize="large" type = "submit" onClick={this.onSubmitUser}>Start Game</Button>
        </div>
      </div>
      );
   }
}
