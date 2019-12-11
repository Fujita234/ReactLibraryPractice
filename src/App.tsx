import React, { Component } from 'react';
import CharacterList, { Character } from './CharacterList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const charactors: Character[] = [
      {
        id: 1,
        name: 'らぁら',
        age: 10,
      },
      {
        id: 2,
        name: 'みれぃ',
        age: 13,
      },
      {
        id: 3,
        name: 'ソフィ',
        age: 14,
      },
    ];
    return (
      <div className="container">
        <header>
          <h1>プリパラ</h1>
        </header>
        <CharacterList school="パプリカ学園" characters={charactors} />
      </div>
    );
  }
}

export default App;
