import { firestore } from 'firebase/app';
import { Administrator } from './administrator';

export type Event = {
  id?: string;
  title: string;
  titleReading: string | null;
  administratorId: string;
  administrator: Administrator | null;
  url: string;
  location: string;
  participant: number;
  date: firestore.Timestamp | null;
  fetchedAt: firestore.Timestamp | null;
  createdAt: firestore.Timestamp | null;
};

export const blankEvent: Event = {
  title: '',
  titleReading: null,
  administratorId: '',
  administrator: null,
  url: '',
  location: '',
  participant: 0,
  date: null,
  fetchedAt: null,
  createdAt: null,
};
