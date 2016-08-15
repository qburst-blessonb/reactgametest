import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {name: "BLESSON"}
  }
  changeTitle(name) {
    this.setState({name});
  }
   render() {
    	return (
        <div>
          <Header changeTitle={this.changeTitle.bind(this)} name = {this.state.name}/>
          <Footer />
        </div>
      );
   }
}
