import React from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';
import capitalize from 'lodash/capitalize';

export interface TestProps {
  text: string;
}

const EventList: React.FC<TestProps> = ({ text = 'あえあえあえあ' }) => {
  const title = `${capitalize(text)}こんにちは`;

  return (
    <>
      <Header as="h2">{title}</Header>
      <Item.Group>
        <Item key={1}>
          <Icon name="user circle" size="huge" />
          <Item.Content>
            <Item.Header>aaa</Item.Header>
            <Item.Meta>23歳</Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    </>
  );
};

export default EventList;
