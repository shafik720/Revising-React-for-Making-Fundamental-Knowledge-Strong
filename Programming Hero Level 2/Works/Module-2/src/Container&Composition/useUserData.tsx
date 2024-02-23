import { useEffect, useState } from "react";

export const useUserData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const controller = new AbortController();

  const url = "https://jsonplaceholder.typicode.com/users";

  const getUser = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(url, { signal: controller.signal });
      const datas = await res.json();
      setIsLoading(false);
      setData(datas);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    getUser();

    // return () => {
    //   controller.abort();
    // };
  }, []);

  return { isLoading, error, data };
};
