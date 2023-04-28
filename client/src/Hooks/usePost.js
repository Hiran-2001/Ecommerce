import axios from "axios";
import { useState } from "react"


async  function usePost({url,data}) {
    const [loading,setLoading]= useState();

    // let res = await axios.post({url,data})

    // return res.data
    console.log(data);

}

export default usePost