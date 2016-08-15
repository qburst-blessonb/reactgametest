import React from 'react';
import ReactDOM from 'react-dom';
export default class Title extends React.Component {
   render() {
    	return (
        <h2>{this.props.name}</h2>
      );
   }
}
