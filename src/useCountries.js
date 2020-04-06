import { useState, useEffect } from 'react';

export const useCountries = () => {
  const [stats, setStats] = useState([]);
  const [apiEndPoint, setApiEndPoint] = useState("https://corona.lmao.ninja/countries");


  useEffect(() => {
    fetch(apiEndPoint).then((res)=>{
      res.json()
    }).then((
      setStats(data)
    ))
  },[]);

  return stats
} 
