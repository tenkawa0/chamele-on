import { firestore } from 'firebase/app';

export type Event = {
  id?: string;
  eventId: string;
  title: string;
  subTitle: string;
  url: string;
  thumbnail: string;
  place: string;
  address: string;
  prefecture: string;
  date: firestore.Timestamp | null;
  fetchedAt: firestore.Timestamp | null;
  createdAt: firestore.Timestamp | null;
};

export const blankEvent: Event = {
  eventId: '',
  title: '',
  subTitle: '',
  url: '',
  thumbnail: '',
  place: '',
  address: '',
  prefecture: '',
  date: null,
  fetchedAt: null,
  createdAt: null,
};
