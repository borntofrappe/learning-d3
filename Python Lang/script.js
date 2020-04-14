// D3 functions
const { select, scaleTime, scaleLinear, extent, max, timeParse } = d3;

// DATA
// https://insights.stackoverflow.com/trends?tags=python
const data = [
  {
    date: '2018-01-01',
    value: 0.10789181226942998,
  },
  {
    date: '2018-02-01',
    value: 0.10476534380132,
  },
  {
    date: '2018-03-01',
    value: 0.1056689848389,
  },
  {
    date: '2018-04-01',
    value: 0.10613729261841,
  },
  {
    date: '2018-05-01',
    value: 0.11014630897897,
  },
  {
    date: '2018-06-01',
    value: 0.11372640704676,
  },
  {
    date: '2018-07-01',
    value: 0.11371031292101,
  },
  {
    date: '2018-08-01',
    value: 0.11264258886326,
  },
  {
    date: '2018-09-01',
    value: 0.11497565774221,
  },
  {
    date: '2018-10-01',
    value: 0.12232676354807999,
  },
  {
    date: '2018-11-01',
    value: 0.12098892921684,
  },
  {
    date: '2019-00-01',
    value: 0.11553902745741,
  },
  {
    date: '2019-01-01',
    value: 0.12182493965327999,
  },
  {
    date: '2019-02-01',
    value: 0.12567815877168,
  },
  {
    date: '2019-03-01',
    value: 0.12659195402298,
  },
  {
    date: '2019-04-01',
    value: 0.12265029059208,
  },
  {
    date: '2019-05-01',
    value: 0.12582668187001,
  },
  {
    date: '2019-06-01',
    value: 0.1284379202533,
  },
  {
    date: '2019-07-01',
    value: 0.12913978494623,
  },
  {
    date: '2019-08-01',
    value: 0.12155650857719,
  },
  {
    date: '2019-09-01',
    value: 0.1317077272345,
  },
  {
    date: '2019-10-01',
    value: 0.13619775053592,
  },
  {
    date: '2019-11-01',
    value: 0.13372390354426,
  },
  {
    date: '2020-00-01',
    value: 0.13461730835996,
  },
  {
    date: '2020-01-01',
    value: 0.13561773800599,
  },
  {
    date: '2020-02-01',
    value: 0.14412959476865,
  },
];

// VIZ
const margin = 20;
const width = 500;
const height = 500;


const parseTime = timeParse("%Y-%m-%d");
const xScale = scaleTime().domain(extent(data, ({date}) => parseTime(date))).range([0, width]);
const yScale = scaleLinear().domain([0, max(data, ({value}) => value)]).range([height, 0]).nice();


const svg = select('main').append('svg').attr('viewBox', `${-margin} ${-margin} ${width + margin * 2} ${height + margin * 2}`);
const defs = svg.append('defs');