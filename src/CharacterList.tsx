import React, { FC } from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

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

const CharacterList: FC<CharacterListProps> = ({
  school = '高校不明',
  characters,
}) => (
  <>
    <Header as='h2'>{school}</Header>
    <Item.Group>
      {characters.map( c => (
        <Item>
          <Icon name='user circle' size='huge'></Icon>
          <Item.Content>
            <Item.Header>{c.name}</Item.Header>
              <Item.Meta>{c.age}歳</Item.Meta>
              <Item.Meta>{c.height ? c.height : '個人情報❤️'}cm</Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </>
);

export default CharacterList;