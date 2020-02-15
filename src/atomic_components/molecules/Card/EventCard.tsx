import React from 'react';
import styled from '@emotion/styled';
import { Icon, Card } from 'semantic-ui-react';
import CardTitle from '../../atoms/Card/CardTitle';
import CardSubTitle from '../../atoms/Card/CardSubTitle';
import CardDate from '../../atoms/Card/CardDate';
import CardThumnail from '../../atoms/Card/CardThumnail';
import CardContent from '../../atoms/Card/CardContent';
import CardDescription from '../../atoms/Card/CardDescription';

import { FeedMemo } from '../../../service/chamele-on/model/feed-memo';

const EventCard: React.FC<{ event: FeedMemo }> = ({ event }) => {
  const ItemCard = styled(Card)`
    &&& {
      margin: 0.75rem 0.3rem 0;
      width: auto;
    }
  `;

  return (
    <ItemCard key={event.id} href={event.url}>
      <CardContent>
        <CardThumnail
          src={event.thumbnail}
          label={<CardDate>{event.date}</CardDate>}
        />
        <CardTitle>{event.title}</CardTitle>
        <CardSubTitle>{event.subTitle}</CardSubTitle>
        <CardDescription>
          <Icon name="sign in alternate" /> {event.place} <br />
          <Icon name="map marker alternate" /> {event.address} <br />
        </CardDescription>
      </CardContent>
    </ItemCard>
  );
};

export default EventCard;
