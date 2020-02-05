/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, useEffect, useRef, useState } from 'react';

import { FeedMemo } from 'service/chamele-on/model/feed-memo';
import { collectionName } from 'service/chamele-on/constants';
import { FirebaseContext } from 'contexts';

const useEvents = () => {
  const [feedMemos, setFeedMemos] = useState<FeedMemo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const firebaseRef = useRef(useContext(FirebaseContext));

  useEffect(() => {
    const { db } = firebaseRef.current;
    if (!db) throw new Error('Firestore is not initialized');
    const query = db.collection(collectionName.feedMemos);

    const load = async () => {
      setLoading(true);
      try {
        const snap = await query.get();
        const feedMemoData = snap.docs.map(doc => ({
          ...(doc.data() as FeedMemo),
          id: doc.id,
        }));
        setFeedMemos(feedMemoData);
        setError(null);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    load();
  }, []);

  return { feedMemos, loading, error };
};

export default useEvents;
