import React from 'react';
import styled from '@emotion/styled';
import EventCard from '../../molecules/Card/EventCard';
import { FeedMemo } from '../../../service/chamele-on/model/feed-memo';

const EventList: React.FC<{ events: FeedMemo[] }> = ({ events }) => {
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
