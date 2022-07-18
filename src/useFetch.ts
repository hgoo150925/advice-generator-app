import { useState, useEffect } from "react";

export const useFetch = (url: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.slip));
  }, [url]);

  return [data];
};

