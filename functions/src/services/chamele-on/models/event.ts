import { firestore } from 'firebase/app';
import { Administrator } from './administrator';

export type Event = {
  id?: string;
  title: string;
  subTitle: string;
  url: string;
  thumbnail: string;
  place: string;
  address: string;
  date: string;
  prefecture: string;
  fetchedAt: firestore.Timestamp | null;
  createdAt: firestore.Timestamp | null;
};

export const blankEvent: Event = {
  title: '',
  subTitle: '',
  url: '',
  thumbnail: '',
  place: '',
  address: '',
  date: '',
  fetchedAt: null,
  createdAt: null,
};
