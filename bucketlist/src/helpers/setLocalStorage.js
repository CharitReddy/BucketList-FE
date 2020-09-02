const setLocalStorage = (setLocalStorageArray) => {
  setLocalStorageArray.map((setLocalStorageObject) =>
    localStorage.setItem(setLocalStorageObject.key, setLocalStorageObject.value)
  );
};

export default setLocalStorage;
