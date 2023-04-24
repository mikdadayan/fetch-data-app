import http from "../services/httpService";
import { TableData } from "./../utils/types";
import { useEffect, useState } from "react";

interface FetchData {
  (jokesAPI: string): [TableData[], boolean];
}

export function useFetchData<T>(url: string) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await http.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}

export function useFetchSingleData<T>(url: string, param: string) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        if (param !== "new") {
          const response = await http.get(url);
          setData(response.data);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url, param]);

  return { data, error, loading, setData };
}

// export const useFetchData: FetchData = (jokesAPI) => {
//   const [data, setData] = useState<TableData[]>([]);
//   const [error, setError] = useState<unknown>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     fetch(jokesAPI)
//       .then((response) => response.json())
//       .then((data) => {
//         setLoading(false);
//         setData(data);
//       });
//   }, [jokesAPI]);

//   return [data, loading, error];
// };
