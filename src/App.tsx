import React, { Component } from 'react';
import CharcterList, { Character } from './CharacterList';

import './App.css';

class App extends Component {
  render() {
    const characters: Character[] = [
      {
        id: 1,
        name: '真中らぁら',
        age: 12,
        height: 160,
      },
      {
        id: 2,
        name: '南みれぃ',
        age: 13,
        height: 165,
      },
      {
        id: 3,
        name: '北条そふぃ',
        age: 14,
        height: 167,
      }
    ];

    return (
      <div className='App'>
        <header>
          <h1>プリパラ　キャラクター</h1>
        </header>
          <CharcterList school='アボカド学園' characters={characters}></CharcterList>
      </div>
    );
  }
}

export default App;