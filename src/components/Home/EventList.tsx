import React from 'react';
import { Item } from 'semantic-ui-react';
import EventCard from '../common/Card/EventCard';
import { FeedMemo } from '../../service/chamele-on/model/feed-memo';

const EventList: React.FC<{ events: FeedMemo[] }> = ({ events }) => {
  return (
    <Item.Group>
      {events.map(event => (
        <EventCard event={event} key={event.id} />
      ))}
    </Item.Group>
  );
};

export default EventList;
