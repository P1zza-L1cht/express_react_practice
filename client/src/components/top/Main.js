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
    this.state = {contentNum: 1};
  }

  setContentNum = (n) =>  {
    this.setState({contentNum: n});
  }

  render() {
    let content;
    // eslint-disable-next-line default-case
    switch(this.state.contentNum) {
      case 1:
        content = <MainVisual />;
        break;
      case 2:
        content = <About />;
        break;
      case 3:
        content = <Skills />;
        break;
      case 4:
        content = <Product />;
        break;
      case 5:
        content = <Contact />;
        break;
    }
    return (
      <div id="main">
        {content}
        <div id='switch'>
          <ul>
            <li><div className='circle-btn' onClick={() => {this.setContentNum(1)}}></div></li>
            <li><div className='circle-btn' onClick={() => {this.setContentNum(2)}}></div></li>
            <li><div className='circle-btn' onClick={() => {this.setContentNum(3)}}></div></li>
            <li><div className='circle-btn' onClick={() => {this.setContentNum(4)}}></div></li>
            <li><div className='circle-btn' onClick={() => {this.setContentNum(5)}}></div></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;