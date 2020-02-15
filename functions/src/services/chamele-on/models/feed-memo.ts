import { firestore } from 'firebase/app';

export type FeedMemo = {
  id?: string;
  title: string | null;
  subTitle: string | null;
  url: string | null;
  thumbnail: string | null;
  place: string | null;
  address: string | null;
  date: string | null;
  administrator: string | null;
  prefecture: string | null;
  fetchedAt: firestore.Timestamp | null;
  createdAt: firestore.Timestamp | null;
};

export const blankFeedMemo: FeedMemo = {
  title: null,
  subTitle: null,
  url: null,
  thumbnail: null,
  place: null,
  address: null,
  date: null,
  administrator: null,
  prefecture: null,
  fetchedAt: null,
  createdAt: null,
};
