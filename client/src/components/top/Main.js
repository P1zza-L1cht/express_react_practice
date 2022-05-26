import React from 'react';
import './main.scss';
import MainVisual from './partTop/MainVisual';
import About from './partTop/About';
import Skills from './partTop/Skills';
import Product from './partTop/Product';
import Contact from './partTop/Contact';

class Main extends React.Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      howScrolled: 0,
    };
  }

  handleScroll = () => {
    this.setState({
      howScrolled: this.myRef.scrollTop
    });
  };

  render() {
    return (
      <div id="main"  onScroll={()=>{this.handleScroll()}} ref={this.myRef}>
        <div id='bg-cover'></div>
        <MainVisual/>
        <About/>
        <Skills/>
        <Product/>
        <Contact/>
      </div>
    );
  }
}

export default Main;