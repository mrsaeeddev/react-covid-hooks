import { useState, useEffect } from 'react';

export const useAll = () => {
  const [allStats, setAllStats] = useState([]);
  const [apiEndPoint, setApiEndPoint] = useState("https://corona.lmao.ninja/");

  useEffect(() => {
    fetch(apiEndPoint+"all").then((res)=>{
      res.json().then((data)=>{
        setAllStats(data)
      })
    })
  },[]);

  return allStats
} 

export const useStates = () => {
  const [stateStats, setStateStats] = useState([]);
  const [apiEndPoint, setApiEndPoint] = useState("https://corona.lmao.ninja/");

  useEffect(() => {
    fetch(apiEndPoint+"states").then((res)=>{
      res.json().then(data=>(
        setStateStats(data)
      ))
    })
  },[]);

  return stateStats
}

export const useCountries = () => {
  const [countryStats, setCountryStats] = useState([]);
  const [apiEndPoint, setApiEndPoint] = useState("https://corona.lmao.ninja/");

  useEffect(() => {
    fetch(apiEndPoint+"countries").then((res)=>{
      res.json().then(data=>(
        setCountryStats(data)
      ))
    })
  },[]);
  
  return countryStats
}

export const useYesterday = () => {
  const [yesterdayStats, setYesterdayStats] = useState([]);
  const [apiEndPoint, setApiEndPoint] = useState("https://corona.lmao.ninja/");

  useEffect(() => {
    fetch(apiEndPoint+"yesterday").then((res)=>{
      res.json().then(data=>(
        setYesterdayStats(data)
      ))
    })
  },[]);
  
  return yesterdayStats
}
