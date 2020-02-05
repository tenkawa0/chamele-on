import { firestore } from 'firebase/app';

export type Administrator = {
  id?: string;
  name: string;
  nameReading: string | null;
  website: string | null;
  createdAt: firestore.Timestamp | null;
  updatedAt: firestore.Timestamp | null;
};

export const blankAdministrator: Administrator = {
  name: '',
  nameReading: null,
  website: null,
  createdAt: null,
  updatedAt: null,
};
