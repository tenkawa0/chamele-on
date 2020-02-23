import React from 'react';

import { TabPaneProps } from 'semantic-ui-react/dist/commonjs/modules/Tab/TabPane';
import { SemanticShorthandItem } from 'semantic-ui-react/dist/commonjs/generic.d';
import { Event } from 'service/chamele-on/model/event';
import { Tab } from 'semantic-ui-react';
import EventCardList from '../organisms/List/EventCardList';
import EventTab from '../organisms/Tab/EventTab';
import useEvents from '../../hooks/use-events';

const EventCardListContainer: React.FC = () => {
  const { events } = useEvents();

  const osakaEvents: Event[] = events.filter(
    event => event.prefecture === 'osaka',
  );
  const hyogoEvents: Event[] = events.filter(
    event => event.prefecture === 'hyogo',
  );

  const panes: {
    pane: SemanticShorthandItem<TabPaneProps>;
    menuItem: string;
  }[] = [];

  panes.push({
    pane: (
      <Tab.Pane key="hyogo">
        <EventCardList events={hyogoEvents} />
      </Tab.Pane>
    ),
    menuItem: 'hyogo',
  });

  panes.push({
    pane: (
      <Tab.Pane key="osaka">
        <EventCardList events={osakaEvents} />{' '}
      </Tab.Pane>
    ),
    menuItem: 'osaka',
  });

  return <EventTab panes={panes} />;
};

export default EventCardListContainer;
