export const getPersistedData = (storage: string | null, initialState: any) => {
  if (storage) {
    return JSON.parse(storage);
  }
  return initialState;
};
