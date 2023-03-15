import { writable } from "svelte/store";

const STORAGE_KEY = "svestimator:estimations";

export function createEstimationStore({ useLocalStorage = true }) {
  const initialValues = getInitialValue(useLocalStorage);

  const store = writable(initialValues);

  return {
    subscribe: store.subscribe,
    add(estimation) {
      store.update((estimations) => {
        const newValue = [...estimations, estimation];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));
        return newValue;
      });
    },
  };
}

function getInitialValue(useLocalStorage) {
  if (!useLocalStorage) {
    return [];
  }

  const storageItem = localStorage.getItem(STORAGE_KEY);

  if (storageItem === null) {
    return [];
  }

  try {
    return JSON.parse(storageItem);
  } catch (e) {
    console.error(e);
    return [];
  }
}
