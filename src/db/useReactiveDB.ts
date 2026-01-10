import { useCallback, useEffect, useState } from "react";
import { subscribe } from "./events";
import {
  addItem,
  clearStore,
  getAllItems,
  putItem,
  removeItem,
  type StoreName,
} from "./indexeddb";

export function useReactiveStore<T>(store: StoreName) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  const load = useCallback(async () => {
    setLoading(true);
    const all = await getAllItems<T>(store);
    setData(all);
    setLoading(false);
  }, [store]);

  useEffect(() => {
    load();
    const unsub = subscribe(store, load);

    return unsub;
  }, [store, load]);

  return {
    data,
    loading,
    reload: load,
    add: (v: T, k?: IDBValidKey) => addItem(store, v, k),
    put: (v: T, k?: IDBValidKey) => putItem(store, v, k),
    remove: (k: IDBValidKey) => removeItem(store, k),
    clear: () => clearStore(store),
  };
}
