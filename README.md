<h4 align="center">
    <a href="https://github.com/dev-saeed/react-covid19-hooks">
        <img src="https://github.com/dev-saeed/react-covid19-hooks/blob/master/logo.png">
    </a>

<br/>
<br/>

📈 Statistics for 🦠 COVID19 harnessing the power of ⚛️ React Hooks

[![NPM](https://img.shields.io/npm/v/react-covid19-hooks.svg)](https://www.npmjs.com/package/neumorphic-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Inline docs](http://inch-ci.org/github/dev-saeed/react-covid19-hooks.svg?branch=master)](http://inch-ci.org/github/dev-saeed/react-covid19-hooks) [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dev-saeed/react-covid19-hooks/issues)
</h4>
<br/>


# react-covid19-hooks
> 📈 Get Statistics for 🦠  COVID19 Harnessing the Power of  ⚛️ React Hooks

- 🚀 get overall statistics, country-wise, state-wise (US) and statistics till yesterday
- 🦠 get overall statistics for COVID19
- 🇺🇸 get updated statistics for all US states
- 🗺️ get statistics for all countries of the world 
- ⏮️ get updates statistics for yesterday
- 📈 For overall statistics, Data : updated (Time Stamp), cases, todayCases, deaths, todayDeaths, recovered, active, critical, casesPerOneMillion, deathsPerOneMillion, tests, testsPerOneMillion, affectedCountries
- 📈 For all states of the US, Data : state, cases, todayCases, deaths, todayDeaths, active, tests, testsPerOneMillion
- 📈 For all countries of the world, Data : country, countryInfo, updated, cases, todayCases, deaths, todayDeaths, recovered, active, critical, casesPerOneMillion, deathsPerOneMillion, tests, testsPerOneMillion
- 📈 For statistics till yesterday, Data : country, countryInfo, updated, cases, todayCases, deaths, todayDeaths, recovered, active, critical, casesPerOneMillion, deathsPerOneMillion, tests, testsPerOneMillion



## 📥 Install

```
npm install react-covid19-hooks
```


## 💅 Usage

### 📈 All Statistics

```
import { useAll } from 'react-covid19-hooks';

const allStats = useAll();
```

### 📈 Country-wise Statistics

```
import { useCountries } from 'react-covid19-hooks';

const allCountries = useCountries();
```

### 📈 State-wise Statistics 

```
import { useStates } from 'react-covid19-hooks';

const allStates = useStates();
```

### 📈 Statistics till Yesterday

```
import { useYesterday } from 'react-covid19-hooks';

const yesterdayStats = useYesterday();
```

## 🗒️ Changelog

Changelog exists in the [releases](https://github.com/dev-saeed/react-covid19-hooks/releases) tab


## ⚙️ Contributions

Contributions/PRs/Feedback is welcome


## 📔 License

This library is release under [MIT License](https://github.com/dev-saeed/react-covid19-hooks/blob/master/LICENSE)