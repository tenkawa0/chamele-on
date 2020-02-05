import React from 'react';
import { Card, Image, List } from 'semantic-ui-react';
import { FeedMemo } from '../../../service/chamele-on/model/feed-memo';

const EventCard: React.FC<{ event: FeedMemo }> = ({ event }) => {
  return (
    <Card href={event.url}>
      <Card.Content>
        <Image floated="left" size="medium" src={event.thumbnail} />
        <Card.Header content={event.title} />
        <Card.Meta content={event.subTitle} />
        <Card.Description>
          <List>
            <List.Item content={event.date} />
            <List.Item content={event.place} />
            <List.Item content={event.address} />
          </List>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default EventCard;
