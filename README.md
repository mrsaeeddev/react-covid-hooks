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


## ⛓️ Connect

<div align="left">
    <p><a href="https://github.com/dev-saeed"><img alt="GitHub @dev-saeed" align="center" src="https://img.shields.io/badge/GITHUB-gray.svg?colorB=6cc644&colorA=6cc644&style=flat" /></a>&nbsp;<small><strong> 💻 </strong> Want to get updated on latest trends in Open Source? Follow me on GitHub!</small></p>
    <p><a href="https://twitter.com/iamsaeed_dev/"><img alt="Twitter @iamsaeed_dev" align="center" src="https://img.shields.io/badge/TWITTER-gray.svg?colorB=1da1f2&colorA=1da1f2&style=flat" /></a>&nbsp;<small><strong> 🐦 </strong> Want to get help or discuss something? Get connected on Twitter!</small></p>
    <p><a href="https://dev.to/saeeddev"><img alt="DEV @saeeddev" align="center" src="https://img.shields.io/badge/MY%20BLOG-gray.svg?colorB=4D2AFF&colorA=4D2AFF&style=flat" /></a>&nbsp;<small><strong> 📖 </strong> Want to read my articles? Visit my DEV blog!</small></p>
    <p><a href="https://www.linkedin.com/in/saeeddev/"><img alt="LinkedIn @saeeddev" align="center" src="https://img.shields.io/badge/LINKEDIN-gray.svg?colorB=0077b5&colorA=0077b5&style=flat" /></a>&nbsp;<small><strong> 🏢 </strong> Want to see my professional journey? Let's Connect on LinkedIn</small></p>
</div>

<br>