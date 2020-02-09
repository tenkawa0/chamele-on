import React from 'react';
import styled from '@emotion/styled';
import { Icon, Card } from 'semantic-ui-react';
import CardTitle from '../../atoms/Card/CardTitle';
import CardSubTitle from '../../atoms/Card/CardSubTitle';
import CardDate from '../../atoms/Card/CardDate';
import CardThumnail from '../../atoms/Card/CardThumnail';
// import CardStatus from '../../atoms/Card/CardStatus';
import CardDescription from '../../atoms/Card/CardDescription';

import { FeedMemo } from '../../../service/chamele-on/model/feed-memo';

const EventCard: React.FC<{ event: FeedMemo }> = ({ event }) => {
  const ItemCard = styled(Card)`
    &&& {
      margin: 0.75rem 0 0;
      padding: 0.75rem;
      width: auto;
    }
  `;

  return (
    <ItemCard key={event.id} href={event.url}>
      <CardTitle>{event.title}</CardTitle>
      <CardSubTitle>{event.subTitle}</CardSubTitle>
      <CardThumnail
        src={event.thumbnail}
        label={<CardDate>{event.date}</CardDate>}
        floated="left"
      />
      <CardDescription>
        <Icon name="sign in alternate" /> {event.place} <br />
        <Icon name="map marker alternate" /> {event.address} <br />
        <Icon name="users" /> {event.group} <br />
        <Icon name="hashtag" /> {event.hashtag}
      </CardDescription>
    </ItemCard>
  );
};

export default EventCard;
