import { useEffect, useState } from 'react';
import { firestore } from '../firebase';

const useFirestore = (collection: string) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const unsubscribe = firestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        const documents: any = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });
    return () => unsubscribe();
  }, [collection]);
  return { docs };
};
export default useFirestore;
