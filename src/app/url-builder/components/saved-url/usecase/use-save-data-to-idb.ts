import { useCallback, useEffect, useState } from "react";

interface UseIndexedDBOptions {
  dbName: string;
  storeName: string;
  version?: number;
  keyPath?: string;
}

export function useIndexedDB<T extends Record<string, any>>({
  dbName,
  storeName,
  version = 1,
  keyPath = "id",
}: UseIndexedDBOptions) {
  const [db, setDb] = useState<IDBDatabase | null>(null);
  const [data, setData] = useState<T[]>([]);

  console.log(data);

  useEffect(() => {
    const request = indexedDB.open(dbName, version);

    request.onupgradeneeded = (event) => {
      const database = (event.target as IDBOpenDBRequest).result;
      if (!database.objectStoreNames.contains(storeName)) {
        database.createObjectStore(storeName, { keyPath });
      }
    };

    request.onsuccess = (event) => {
      const database = (event.target as IDBOpenDBRequest).result;
      setDb(database);
    };

    request.onerror = (event) => {
      console.error("IndexedDB error:", (event.target as IDBRequest).error);
    };
  }, [dbName, storeName, version, keyPath]);

  const fetchAll = useCallback(() => {
    if (!db) return;
    const tx = db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const req = store.getAll();

    req.onsuccess = () => setData(req.result as T[]);
  }, [db, storeName]);

  const addItem = useCallback(
    (item: T) => {
      if (!db) return;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      store.add(item);
      tx.oncomplete = fetchAll;
      tx.onerror = (e) => console.error("Add failed:", e);
    },
    [db, storeName, fetchAll],
  );

  const updateItem = useCallback(
    (item: T) => {
      if (!db) return;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      store.put(item);
      tx.oncomplete = fetchAll;
    },
    [db, storeName, fetchAll],
  );

  const deleteItem = useCallback(
    (key: IDBValidKey) => {
      if (!db) return;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      store.delete(key);
      tx.oncomplete = fetchAll;
    },
    [db, storeName, fetchAll],
  );

  useEffect(() => {
    if (db) fetchAll();
  }, [db, fetchAll]);

  return { data, addItem, updateItem, deleteItem, reload: fetchAll };
}
