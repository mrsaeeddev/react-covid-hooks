'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

const useAll = () => {
  const [allStats, setAllStats] = react.useState([]);
  const [apiEndPoint, setApiEndPoint] = react.useState("https://corona.lmao.ninja/");
  react.useEffect(() => {
    fetch(apiEndPoint + "all").then(res => {
      res.json().then(data => {
        setAllStats(data);
      });
    });
  }, []);
  return allStats;
};
const useStates = () => {
  const [stateStats, setStateStats] = react.useState([]);
  const [apiEndPoint, setApiEndPoint] = react.useState("https://corona.lmao.ninja/");
  react.useEffect(() => {
    fetch(apiEndPoint + "states").then(res => {
      res.json().then(data => setStateStats(data));
    });
  }, []);
  return stateStats;
};
const useCountries = () => {
  const [countryStats, setCountryStats] = react.useState([]);
  const [apiEndPoint, setApiEndPoint] = react.useState("https://corona.lmao.ninja/");
  react.useEffect(() => {
    fetch(apiEndPoint + "countries").then(res => {
      res.json().then(data => setCountryStats(data));
    });
  }, []);
  return countryStats;
};
const useYesterday = () => {
  const [yesterdayStats, setYesterdayStats] = react.useState([]);
  const [apiEndPoint, setApiEndPoint] = react.useState("https://corona.lmao.ninja/");
  react.useEffect(() => {
    fetch(apiEndPoint + "yesterday").then(res => {
      res.json().then(data => setYesterdayStats(data));
    });
  }, []);
  return yesterdayStats;
};

exports.useAll = useAll;
exports.useCountries = useCountries;
exports.useStates = useStates;
exports.useYesterday = useYesterday;
//# sourceMappingURL=index.js.map
