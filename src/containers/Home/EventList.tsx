import React from 'react';

import EventList from '../../components/Home/EventList';
import useEvents from '../../hooks/use-events';

const EventListContainer: React.FC = () => {
  const { feedMemos } = useEvents();

  return <EventList events={feedMemos} />;
};

export default EventListContainer;
