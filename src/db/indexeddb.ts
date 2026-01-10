import { type IDBPDatabase, openDB } from "idb";
import { notify } from "./events";

const DB_NAME = "rzrblade-db";
const DB_VERSION = 1;

export const STORES = {
  URL: "url",
  JSON_BUILDER: "jsonBuilder",
  ENCRYPTION: "encryptionHelper",
} as const;

export type StoreName = (typeof STORES)[keyof typeof STORES];

let dbPromise: Promise<IDBPDatabase> | null = null;

export function getDB(): Promise<IDBPDatabase> {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade(db) {
        Object.values(STORES).forEach((store) => {
          if (!db.objectStoreNames.contains(store)) {
            db.createObjectStore(store);
          }
        });
      },
    });
  }

  return dbPromise;
}

export async function addItem<T>(
  store: StoreName,
  value: T,
  key?: IDBValidKey,
) {
  const db = await getDB();
  const res = await db.add(store, value, key);
  notify(store);
  return res;
}

export async function putItem<T>(
  store: StoreName,
  value: T,
  key?: IDBValidKey,
) {
  const db = await getDB();
  const res = await db.put(store, value, key);
  notify(store);
  return res;
}

export async function getItem<T>(
  store: StoreName,
  key: IDBValidKey,
): Promise<T | undefined> {
  const db = await getDB();
  return db.get(store, key);
}

export async function getAllItems<T>(store: StoreName): Promise<T[]> {
  const db = await getDB();
  return db.getAll(store);
}

export async function removeItem(store: StoreName, key: IDBValidKey) {
  const db = await getDB();
  await db.delete(store, key);
  notify(store);
}

export async function clearStore(store: StoreName) {
  const db = await getDB();
  await db.clear(store);
  notify(store);
}
