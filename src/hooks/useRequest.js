import { useCallback } from "react";

const BASE_URL = process.env.REACT_APP_URL;
const useRequest = () => {
  const request = useCallback(
    async ({
      baseurl = BASE_URL,
      url = "",
      method = "GET",
      body = null,
      headers = {},
      includeToken = true,
    }) => {
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }

        const response = await fetch(`${baseurl}api/${url}`, {
          method: method,
          headers,
          body,
        });
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error, "msg");
      }
    },
    []
  );
  return { request };
};

export default useRequest;
