/* DATASET
data collected from the [WHO Influenza Surveillance Outputs](https://www.who.int/influenza/resources/charts/en/)
- Australia
- week 14 to 31 (mid-autumn to winter)
- years 2017 to 2020
- positive and negative tests (all subtypes combined)
*/
const dataset = [
  {
    year: 2020,
    tests: [
      { week: 14, positive: 15, negative: 2694 },
      { week: 15, positive: 6, negative: 2508 },
      { week: 16, positive: 3, negative: 2609 },
      { week: 17, positive: 7, negative: 2649 },
      { week: 18, positive: 0, negative: 3060 },
      { week: 19, positive: 0, negative: 3003 },
      { week: 20, positive: 0, negative: 3437 },
      { week: 21, positive: 0, negative: 3383 },
      { week: 22, positive: 0, negative: 3465 },
      { week: 23, positive: 0, negative: 3502 },
      { week: 24, positive: 0, negative: 2743 },
      { week: 25, positive: 1, negative: 3604 },
      { week: 26, positive: 0, negative: 3464 },
      { week: 27, positive: 1, negative: 3700 },
      { week: 28, positive: 1, negative: 4282 },
      { week: 29, positive: 2, negative: 5111 },
      { week: 30, positive: 0, negative: 5024 },
      { week: 31, positive: 0, negative: 4226 },
    ],
  },
  {
    year: 2019,
    tests: [
      { week: 14, positive: 98, negative: 1095 },
      { week: 15, positive: 144, negative: 1176 },
      { week: 16, positive: 178, negative: 1127 },
      { week: 17, positive: 210, negative: 1270 },
      { week: 18, positive: 222, negative: 1267 },
      { week: 19, positive: 257, negative: 1326 },
      { week: 20, positive: 385, negative: 1556 },
      { week: 21, positive: 686, negative: 2038 },
      { week: 22, positive: 707, negative: 2176 },
      { week: 23, positive: 912, negative: 2223 },
      { week: 24, positive: 842, negative: 2479 },
      { week: 25, positive: 891, negative: 2433 },
      { week: 26, positive: 1002, negative: 2563 },
      { week: 27, positive: 867, negative: 2671 },
      { week: 28, positive: 662, negative: 2712 },
      { week: 29, positive: 607, negative: 2572 },
      { week: 30, positive: 461, negative: 2297 },
      { week: 31, positive: 381, negative: 2245 },
    ],
  },
  {
    year: 2018,
    tests: [
      { week: 14, positive: 30, negative: 623 },
      { week: 15, positive: 14, negative: 682 },
      { week: 16, positive: 23, negative: 705 },
      { week: 17, positive: 18, negative: 672 },
      { week: 18, positive: 31, negative: 756 },
      { week: 19, positive: 32, negative: 815 },
      { week: 20, positive: 33, negative: 935 },
      { week: 21, positive: 24, negative: 984 },
      { week: 22, positive: 24, negative: 946 },
      { week: 23, positive: 25, negative: 1094 },
      { week: 24, positive: 44, negative: 1086 },
      { week: 25, positive: 41, negative: 1193 },
      { week: 26, positive: 72, negative: 1165 },
      { week: 27, positive: 67, negative: 1244 },
      { week: 28, positive: 96, negative: 1427 },
      { week: 29, positive: 73, negative: 1422 },
      { week: 30, positive: 88, negative: 1408 },
      { week: 31, positive: 71, negative: 1399 },
    ],
  },
  {
    year: 2017,
    tests: [
      { week: 14, positive: 21, negative: 596 },
      { week: 15, positive: 18, negative: 593 },
      { week: 16, positive: 11, negative: 734 },
      { week: 17, positive: 14, negative: 675 },
      { week: 18, positive: 27, negative: 720 },
      { week: 19, positive: 19, negative: 719 },
      { week: 20, positive: 32, negative: 725 },
      { week: 21, positive: 41, negative: 789 },
      { week: 22, positive: 27, negative: 905 },
      { week: 23, positive: 31, negative: 781 },
      { week: 24, positive: 51, negative: 842 },
      { week: 25, positive: 88, negative: 989 },
      { week: 26, positive: 82, negative: 948 },
      { week: 27, positive: 170, negative: 1114 },
      { week: 28, positive: 284, negative: 1238 },
      { week: 29, positive: 437, negative: 1150 },
      { week: 30, positive: 428, negative: 1146 },
      { week: 31, positive: 619, negative: 1136 },
    ],
  },
];

/* DATA
compute the total number of tests and the percentage of positive values
each week should be described by the following object
{
  week,
  positive,
  negative,
  total,
  percentage
}
*/
const format = d3.format('.2f');
const data = dataset.map(({year, tests}) => ({
  year,
  tests: tests.map(test => Object.assign({}, test, {
    percentage: format(test.positive / (test.positive + test.negative))
  }))
}))

