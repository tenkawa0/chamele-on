/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useContext, useEffect, useRef, useState } from 'react';
import { startOfDay } from 'date-fns';

import { Event } from 'service/chamele-on/model/event';
import { collectionName } from 'service/chamele-on/constants';
import { FirebaseContext } from 'contexts';

const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const firebaseRef = useRef(useContext(FirebaseContext));

  useEffect(() => {
    const { db } = firebaseRef.current;
    if (!db) throw new Error('Firestore is not initialized');
    const query = db
      .collection(collectionName.events)
      .where('date', '>=', startOfDay(new Date()))
      .orderBy('date', 'asc');

    const load = async () => {
      setLoading(true);
      try {
        const snap = await query.get();
        const eventData = snap.docs.map(doc => ({
          ...(doc.data() as Event),
          id: doc.id,
        }));
        setEvents(eventData);
        setError(null);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    load();
  }, []);

  return { events, loading, error };
};

export default useEvents;
