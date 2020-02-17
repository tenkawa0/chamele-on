import React from 'react';

import EventCardList from '../organisms/List/EventCardList';
import useEvents from '../../hooks/use-events';

const EventCardListContainer: React.FC = () => {
  const { events } = useEvents();

  return <EventCardList events={events} />;
};

export default EventCardListContainer;
