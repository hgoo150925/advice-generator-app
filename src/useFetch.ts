import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url:string) => {
//   const [loading, setLoading] = useState(true);
const [advice, setAdvice] = useState([]);

  const getfetchData = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    const { slip } = data;
    setAdvice(slip);
    // setLoading(false);
  }, [url]);

  useEffect(() => {
    getfetchData();
  }, [url, getfetchData]);
  return {  advice };
};