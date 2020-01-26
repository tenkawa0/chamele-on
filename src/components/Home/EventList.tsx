import React from 'react';
import { Item } from 'semantic-ui-react';
import EventCard from '../Common/Card/EventCard';
import { Event } from '../../service/chamele-on/model/event';

const EventList: React.FC<{ events: Event[] }> = ({ events }) => {
  return (
    <>
      <Item.Group>
        {events.map(event => (
          <EventCard event={event} />
        ))}
      </Item.Group>
    </>
  );
};

export default EventList;
