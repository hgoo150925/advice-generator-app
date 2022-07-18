import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url:any) => {
//   const [loading, setLoading] = useState(true);
  const [adviceData, setAdviceData] = useState([]);

  const getfetchData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setAdviceData(adviceData);
    // setLoading(false);
  }, [url]);

  useEffect(() => {
    getfetchData();
  }, [url, getfetchData]);
  return {  adviceData  };
};