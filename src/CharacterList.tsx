import React, { Component } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

/**
 * Characterのinterfaceを定義
 */
export interface Character {
  id: number;
  name: string;
  age: number;
  height?: number;
}

interface CharacterListProps {
  school: string;
  characters: Character[];
}

/**
 * お試しのコンポーネント画面作りクラス
 */
class CharacterList extends Component<CharacterListProps> {
  render() {
    const { school, characters } = this.props;
    return (
      <>
      <Header as="h2">{school}</Header>
      <Item.Group>
        {characters.map(c => (
          <Item key={c.id}>
            <Icon name="user circle" size="huge" />
            <Item.Content>
              <Item.Header>{c.name}</Item.Header>
              <Item.Meta>{c.age}歳とっちゃったぷり〜</Item.Meta>
              <Item.Meta>
                {c.height ? c.height : '???'}cm
              </Item.Meta>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
      </>
    );
  }
}

export default CharacterList;