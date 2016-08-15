import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Header/Title.jsx';

export default class Header extends React.Component {
  handleChange(e) {
    const name = e.target.value;
    this.props.changeTitle(name);
  }
   render() {
    	return (<div>
        <Title name={this.props.name}/>
        <input onChange={this.handleChange.bind(this)} />
        </div>
      );
   }
}
