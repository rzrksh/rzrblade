// src/db/events.ts
export type StoreListener = () => void;

const listeners = new Map<string, Set<StoreListener>>();

export function subscribe(store: string, cb: StoreListener) {
  if (!listeners.has(store)) {
    listeners.set(store, new Set());
  }

  listeners.get(store)!.add(cb);

  return () => {
    listeners.get(store)!.delete(cb);
  };
}

export function notify(store: string) {
  listeners.get(store)?.forEach((cb) => cb());
}
