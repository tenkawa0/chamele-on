import React from 'react';
import styled from '@emotion/styled';
import { Icon, Card } from 'semantic-ui-react';
import { SemanticCOLORS } from 'semantic-ui-react/dist/commonjs/generic.d';
import CardTitle from '../../atoms/Card/CardTitle';
import CardSubTitle from '../../atoms/Card/CardSubTitle';
import CardDate from '../../atoms/Card/CardDate';
import CardThumnail from '../../atoms/Card/CardThumnail';
import CardContent from '../../atoms/Card/CardContent';
import CardDescription from '../../atoms/Card/CardDescription';
import { Event } from '../../../service/chamele-on/model/event';

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  const ItemCard = styled(Card)`
    &&& {
      margin: 0.75rem 0.3rem 0;
      width: auto;
    }
  `;

  const eventDate = event.date?.toDate() ?? new Date(2000 - 1 - 1);
  const year = eventDate.getFullYear().toString();
  const month = (eventDate.getMonth() + 1).toString();
  const date = eventDate.getDate().toString();
  const day = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'][
    eventDate.getDay()
  ];

  let dateFormat = 'YY-MM-DD (DAY)';
  dateFormat = dateFormat.replace(/YY/g, year);
  dateFormat = dateFormat.replace(/MM/g, month);
  dateFormat = dateFormat.replace(/DD/g, date);
  dateFormat = dateFormat.replace(/DAY/g, day);

  let dayColor: SemanticCOLORS = 'teal';
  switch (eventDate.getDay()) {
    case 0:
      dayColor = 'pink';
      break;
    case 6:
      dayColor = 'blue';
      break;
    default:
  }

  // fire storageのgetDownloadURL()を使用すると処理が冗長になるため、直接noimage.jpgを参照
  const thumbnail = event.thumbnail
    ? event.thumbnail
    : 'https://firebasestorage.googleapis.com/v0/b/chamele-on.appspot.com/o/images%2Fnoimage.jpg?alt=media';

  return (
    <ItemCard key={event.id} href={event.url}>
      <CardContent>
        <CardThumnail
          src={thumbnail}
          label={<CardDate color={dayColor}>{dateFormat}</CardDate>}
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
