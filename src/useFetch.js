import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [Data, setData] = useState(null);
  const [Pending, setPending] = useState(true);
  const [Error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Unable to fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          setPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { Data, Pending, Error };
};

export default useFetch;
