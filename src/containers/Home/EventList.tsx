import React from 'react';
//import { useParams } from 'react-router-dom';
//import { Button, Card, Icon, Statistic } from 'semantic-ui-react';
import { Event } from '../../service/chamele-on/model/event';

import EventList from '../../components/Home/EventList';

const events: Event[] = [
  {
    id: '1',
    title: 'Java勉強会',
    date: '2020-5-25',
    location: '兵庫県神戸',
  },
  {
    id: '2',
    title: 'Python勉強会',
    date: '2020-2-15',
    location: '兵庫県姫路',
  },
  {
    id: '3',
    title: 'もくもく会',
    date: '2020-3-21',
    location: '大阪府梅田',
  },
  {
    id: '4',
    title: 'IoTハッカソン',
    date: '2020-9-2',
    location: '大阪府吹田',
  },
  {
    id: '5',
    title: 'LT大会',
    date: '2020-3-11',
    location: '兵庫県神戸',
  },
  {
    id: '6',
    title: 'react勉強会',
    date: '2020-5-31',
    location: '大阪府梅田',
  },
];

const EventListContainer: React.FC = () => {
  //const { text } = useParams();

  return <EventList events={events} />;
};

export default EventListContainer;
