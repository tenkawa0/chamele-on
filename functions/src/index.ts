import * as functions from 'firebase-functions';
import admin from 'firebase-admin';

import { collectionName } from './services/chamele-on/constants';

admin.initializeApp();

export const administrators = functions
  .region('asia-northeast1')
  .https.onRequest(async (req, res) => {
    const snap = await admin
      .firestore()
      .collection(collectionName.administrators)
      .get();
    const data = snap.docs.map(doc => doc.data());
    res.send({ data });
  });
