import React from 'react';
import { Icon, Card } from 'semantic-ui-react';
import { Event } from '../../../service/chamele-on/model/event';

const EventItem: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <Card>
      <Card.Content header={event.title} />
      <Card.Content description={event.date} />
      <Card.Content extra>
        <Icon color="red" name="map marker alternate" /> {event.location}
      </Card.Content>
    </Card>
  );
};

export default EventItem;
