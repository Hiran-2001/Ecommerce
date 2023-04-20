import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function useGet(url ) {
//   console.log(url);
  const [data, setData] = useState([]);
  useEffect(() => {
 
   const fetchData=async()=>{
    try {
        const res = await axios.get(url)
        // console.log(res.data.Product);
        setData(res.data.Product)
    } catch (error) {
        console.log(error);
    }
    }
    
    fetchData()
    
  }, [url]);
  return [data];
}

export default useGet;
