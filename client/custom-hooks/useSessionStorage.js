import { useState, useRef, useEffect } from 'react';

const useSessionStorage = (valueName, initialValue) => {
  const [sessionValue, setSessionValue] = useState(initialValue);
  const sessionValueName = useRef(valueName);
  const storedContentFetched = useRef(false);

  const saveToSessionStorage = () =>
    sessionStorage.setItem(sessionValueName.current, sessionValue);
  const retrieveFromSessionStorage = () =>
    sessionStorage.getItem(sessionValueName.current);
  const clearSessionStorage = () =>
    sessionStorage.removeItem(sessionValueName.current);

  useEffect(() => {
    const storedContent = retrieveFromSessionStorage();
    if (storedContent && !storedContentFetched.current) {
      setSessionValue(storedContent);
      storedContentFetched.current = true;
      return;
    }

    saveToSessionStorage();
  }, [sessionValue, sessionValueName]);

  return {
    sessionValue,
    setSessionValue,
    sessionValueName,
    saveToSessionStorage,
    retrieveFromSessionStorage,
    clearSessionStorage,
  };
};

export default useSessionStorage;
