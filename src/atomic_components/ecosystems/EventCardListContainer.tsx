import React from 'react';

import EventCardList from '../organisms/List/EventCardList';
import useEvents from '../../hooks/use-events';

const EventCardListContainer: React.FC = () => {
  const { feedMemos } = useEvents();

  return <EventCardList events={feedMemos} />;
};

export default EventCardListContainer;
