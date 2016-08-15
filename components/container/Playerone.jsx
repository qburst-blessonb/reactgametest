import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Header/Title.jsx';

export default class Header extends React.Component {
  getInitialState() {
    return {
      username: ''
    }
    handleChange(e) {
      this.setState({username: e.target.value})
    }
    onSubmitUser() {
      e.preventDefault();
      var username = this.state.username;
      username: '';
    }
   render() {
    	return (<div>
        <Title name={this.props.name}/>
        <input onChange={this.handleChange} value={this.state.username} type="text"/>
          <div className="modal-container" style={{textAlign: "center"}}>
            <Button bsStyle="success" bsSize="large" type = "submit" onClick={this.onSubmitUser} >Enter</Button>
          </div>
        </div>
      );
   }
}
