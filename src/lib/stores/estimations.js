import { writable } from "svelte/store";

const STORAGE_KEY = "svestimator:estimations";

export function createEstimationStore({ useLocalStorage = true }) {
  const initialValues = getInitialValue(useLocalStorage);

  const store = writable(initialValues);

  return {
    subscribe: store.subscribe,
    add(estimation) {
      const newEstimation = {
        id: crypto.randomUUID(),
        created: new Date(),
        ...estimation,
      };

      store.update((estimations) => {
        const newValue = [
          ...estimations,
          newEstimation
        ];

        localStorage.setItem(STORAGE_KEY, JSON.stringify(newValue));

        return newValue;
      });

      return newEstimation;
    },

    remove(id) {
      store.update((estimations) => {
        const newValue = estimations.filter(
          (estimation) => estimation.id !== id
        );
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
    const parsedEstimations = JSON.parse(storageItem);

    const mappedEstimations = parsedEstimations.map((estimation) => {
      const { created, ...rest } = estimation;

      return {
        id: crypto.randomUUID(),
        created: created ? new Date(created) : null,
        ...rest,
      };
    });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(mappedEstimations));
    return mappedEstimations;
  } catch (e) {
    console.error(e);
    return [];
  }
}
