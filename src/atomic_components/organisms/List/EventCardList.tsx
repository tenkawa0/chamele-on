import React from 'react';
import styled from '@emotion/styled';
import EventCard from '../../molecules/Card/EventCard';
import { Event } from '../../../service/chamele-on/model/event';

const EventList: React.FC<{ events: Event[] }> = ({ events }) => {
  const ListWrapper = styled.div`
    margin: 1rem 0.5rem;
  `;

  return (
    <ListWrapper>
      {events.map(event => (
        <EventCard event={event} key={event.id} />
      ))}
    </ListWrapper>
  );
};

export default EventList;
