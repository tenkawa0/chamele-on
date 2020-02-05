import { firestore } from 'firebase/app';

export type FeedMemo = {
  id?: string;
  title: string | null;
  subTitle: string | null;
  url: string | undefined;
  thumbnail: string | null;
  group: string | null;
  groupUrl: string | null;
  place: string | null;
  address: string | null;
  date: string | null;
  startTime: string | null;
  hashtag: string | null;
  hashtagUrl: string | null;
  entryStart: string | null;
  entryClose: string | null;
  status: string | null;
  administrator: string | null;
  fetchedAt: firestore.Timestamp | null;
  createdAt: firestore.Timestamp | null;
};

export const blankFeedMemo: FeedMemo = {
  title: null,
  subTitle: null,
  url: undefined,
  thumbnail: null,
  group: null,
  groupUrl: null,
  place: null,
  address: null,
  date: null,
  startTime: null,
  hashtag: null,
  hashtagUrl: null,
  entryStart: null,
  entryClose: null,
  status: null,
  administrator: null,
  fetchedAt: null,
  createdAt: null,
};
