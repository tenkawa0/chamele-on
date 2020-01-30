import { firestore } from 'firebase/app';

export type FeedMemo = {
  id?: string;
  title: string | null;
  fetchedAt: firestore.Timestamp | null;
  createdAt: firestore.Timestamp | null;
};

export const blankFeedMemo: FeedMemo = {
  title: null,
  fetchedAt: null,
  createdAt: null,
};
