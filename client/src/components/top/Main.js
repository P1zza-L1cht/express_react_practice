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
    this.contentNum = 1;
  }

  changeContent(event) {
    this.contentNum = event.target.value;
  }

  render() {
    let content;
    // eslint-disable-next-line default-case
    switch(this.contentNum) {
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
        {this.contentNum}
        {content}
        <div id='switch'>
          <ul>
            <li><div className='circle-btn' value='1' onChange={(event) => {this.changeContent(event)}}></div></li>
            <li><div className='circle-btn' value='2' onChange={(event) => {this.changeContent(event)}}></div></li>
            <li><div className='circle-btn' value='3' onChange={(event) => {this.changeContent(event)}}></div></li>
            <li><div className='circle-btn' value='4' onChange={(event) => {this.changeContent(event)}}></div></li>
            <li><div className='circle-btn' value='5' onChange={(event) => {this.changeContent(event)}}></div></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Main;