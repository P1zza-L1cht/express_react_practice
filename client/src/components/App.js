import React from 'react';
import Header from './Header';
import Main from './top/Main';
import Game from './games/Game';
import Footer from './Footer';
import './app.scss';


class App extends React.Component{
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Game />
        <Footer />
      </div>
    );
  }
}

export default App;
