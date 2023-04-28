import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function useGet(url) {
  //   console.log(url);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const headers = { Authorization: "jwtToken eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzkwZGVjNjNmNGU1MTk3YzcwNmVhOSIsImlhdCI6MTY4MTk2NzYyOCwiZXhwIjoxNjgyMDU0MDI4fQ.zRB5pkYhanoUoV-unAf9IFtxyVZGbpvvWqH06dSp5Ew" };
        const res = await axios.get(url);
        // console.log(res.data.Product);
        setData(res.data.Product);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);
  return [data];
}

export default useGet;
