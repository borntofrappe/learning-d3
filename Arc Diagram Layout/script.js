// https://ec.europa.eu/eurostat/cache/infographs/energy/bloc-2c.html

const nodes = [
  { node: "Belgium", id: 0 },
  { node: "Bulgaria", id: 1 },
  { node: "Czechia", id: 2 },
  { node: "Denmark", id: 3 },
  { node: "Germany", id: 4 },
  { node: "Estonia", id: 5 },
  { node: "Ireland", id: 6 },
  { node: "Greece", id: 7 },
  { node: "Spain", id: 8 },
  { node: "France", id: 9 },
  { node: "Croatia", id: 10 },
  { node: "Italy", id: 11 },
  { node: "Cyprus", id: 12 },
  { node: "Latvia", id: 13 },
  { node: "Lithuania", id: 14 },
  { node: "Luxembourg", id: 15 },
  { node: "Hungary", id: 16 },
  { node: "Malta", id: 17 },
  { node: "Netherlands", id: 18 },
  { node: "Austria", id: 19 },
  { node: "Poland", id: 20 },
  { node: "Portugal", id: 21 },
  { node: "Romania", id: 22 },
  { node: "Slovenia", id: 23 },
  { node: "Slovakia", id: 24 },
  { node: "Finland", id: 25 },
  { node: "Sweden", id: 26 },
];

const importEdges = [
  { source: 0, target: 9, weight: 4231967 },
  { source: 0, target: 15, weight: 389934 },
  { source: 0, target: 18, weight: 3782161 },
  { source: 1, target: 7, weight: 1876000 },
  { source: 1, target: 22, weight: 2048373 },
  { source: 2, target: 4, weight: 3172000 },
  { source: 2, target: 19, weight: 8687133 },
  { source: 2, target: 20, weight: 1864577 },
  { source: 2, target: 24, weight: 9984000 },
  { source: 3, target: 18, weight: 2081881 },
  { source: 3, target: 26, weight: 1648000 },
  { source: 4, target: 0, weight: 327900 },
  { source: 4, target: 2, weight: 9077913 },
  { source: 4, target: 3, weight: 3437119 },
  { source: 4, target: 9, weight: 2757101 },
  { source: 4, target: 15, weight: 4998440 },
  { source: 4, target: 18, weight: 8747674 },
  { source: 4, target: 19, weight: 13778283 },
  { source: 4, target: 20, weight: 11235208 },
  { source: 4, target: 26, weight: 386000 },
  { source: 5, target: 13, weight: 2015906 },
  { source: 5, target: 25, weight: 22000 },
  { source: 7, target: 1, weight: 15056 },
  { source: 7, target: 11, weight: 317138 },
  { source: 8, target: 9, weight: 6180868 },
  { source: 8, target: 21, weight: 7553113 },
  { source: 9, target: 0, weight: 5033900 },
  { source: 9, target: 4, weight: 12965000 },
  { source: 9, target: 8, weight: 11421711 },
  { source: 9, target: 11, weight: 13803382 },
  { source: 9, target: 15, weight: 1155119 },
  { source: 10, target: 16, weight: 376000 },
  { source: 10, target: 23, weight: 1919405 },
  { source: 11, target: 7, weight: 2633000 },
  { source: 11, target: 9, weight: 1157691 },
  { source: 11, target: 17, weight: 419810 },
  { source: 11, target: 19, weight: 9776 },
  { source: 11, target: 23, weight: 423107 },
  { source: 13, target: 5, weight: 451000 },
  { source: 13, target: 14, weight: 2356400 },
  { source: 14, target: 13, weight: 1382568 },
  { source: 14, target: 20, weight: 2158740 },
  { source: 14, target: 26, weight: 95000 },
  { source: 15, target: 0, weight: 68800 },
  { source: 16, target: 10, weight: 3204200 },
  { source: 16, target: 19, weight: 101816 },
  { source: 16, target: 22, weight: 2519888 },
  { source: 16, target: 24, weight: 57000 },
  { source: 16, target: 11, weight: 2868 },
  { source: 18, target: 0, weight: 7804600 },
  { source: 18, target: 3, weight: 1029278 },
  { source: 18, target: 4, weight: 8677000 },
  { source: 19, target: 2, weight: 378420 },
  { source: 19, target: 4, weight: 6101000 },
  { source: 19, target: 11, weight: 1165707 },
  { source: 19, target: 16, weight: 6386000 },
  { source: 19, target: 23, weight: 4777438 },
  { source: 20, target: 2, weight: 3649712 },
  { source: 20, target: 4, weight: 12000 },
  { source: 20, target: 14, weight: 380700 },
  { source: 20, target: 24, weight: 3155000 },
  { source: 21, target: 8, weight: 6096881 },
  { source: 22, target: 1, weight: 3117376 },
  { source: 22, target: 16, weight: 171000 },
  { source: 23, target: 10, weight: 5002800 },
  { source: 23, target: 11, weight: 3909180 },
  { source: 23, target: 19, weight: 211406 },
  { source: 24, target: 2, weight: 262006 },
  { source: 24, target: 16, weight: 9251000 },
  { source: 24, target: 20, weight: 92552 },
  { source: 25, target: 5, weight: 6916000 },
  { source: 25, target: 26, weight: 1000 },
  { source: 26, target: 3, weight: 5998761 },
  { source: 26, target: 14, weight: 4589800 },
  { source: 26, target: 20, weight: 3788919 },
  { source: 26, target: 25, weight: 18466000 },
];

const exportEdges = [
  { source: 0, target: 9, weight: 5029349 },
  { source: 0, target: 15, weight: 74756 },
  { source: 0, target: 18, weight: 7805621 },
  { source: 1, target: 7, weight: 15000 },
  { source: 1, target: 22, weight: 2946803 },
  { source: 2, target: 4, weight: 9078000 },
  { source: 2, target: 19, weight: 378420 },
  { source: 2, target: 20, weight: 3797046 },
  { source: 2, target: 24, weight: 262000 },
  { source: 3, target: 18, weight: 1053439 },
  { source: 3, target: 26, weight: 5431000 },
  { source: 4, target: 0, weight: 123500 },
  { source: 4, target: 2, weight: 3172336 },
  { source: 4, target: 3, weight: 6486562 },
  { source: 4, target: 9, weight: 12959450 },
  { source: 4, target: 15, weight: 1003856 },
  { source: 4, target: 18, weight: 8677063 },
  { source: 4, target: 19, weight: 5310060 },
  { source: 4, target: 20, weight: 12068 },
  { source: 4, target: 26, weight: 2550000 },
  { source: 5, target: 13, weight: 167022 },
  { source: 5, target: 25, weight: 6611000 },
  { source: 7, target: 1, weight: 1875568 },
  { source: 7, target: 11, weight: 2632593 },
  { source: 8, target: 9, weight: 11410282 },
  { source: 8, target: 21, weight: 6096853 },
  { source: 9, target: 0, weight: 4257300 },
  { source: 9, target: 4, weight: 2762000 },
  { source: 9, target: 8, weight: 6192458 },
  { source: 9, target: 11, weight: 1164020 },
  { source: 10, target: 16, weight: 3204000 },
  { source: 10, target: 23, weight: 5002470 },
  { source: 11, target: 7, weight: 317000 },
  { source: 11, target: 9, weight: 13789133 },
  { source: 11, target: 17, weight: 4233 },
  { source: 11, target: 19, weight: 1165707 },
  { source: 11, target: 23, weight: 3909180 },
  { source: 13, target: 5, weight: 3396000 },
  { source: 13, target: 14, weight: 1382600 },
  { source: 14, target: 13, weight: 2356389 },
  { source: 14, target: 20, weight: 380729 },
  { source: 14, target: 26, weight: 4188000 },
  { source: 15, target: 0, weight: 386700 },
  { source: 15, target: 9, weight: 1147553 },
  { source: 16, target: 10, weight: 376300 },
  { source: 16, target: 19, weight: 6385979 },
  { source: 16, target: 22, weight: 1467829 },
  { source: 16, target: 24, weight: 9251000 },
  { source: 17, target: 11, weight: 419841 },
  { source: 18, target: 0, weight: 3782000 },
  { source: 18, target: 3, weight: 2142501 },
  { source: 18, target: 4, weight: 8957000 },
  { source: 19, target: 2, weight: 8687133 },
  { source: 19, target: 4, weight: 14433000 },
  { source: 19, target: 11, weight: 9776 },
  { source: 19, target: 16, weight: 102000 },
  { source: 19, target: 23, weight: 211406 },
  { source: 20, target: 2, weight: 1677647 },
  { source: 20, target: 4, weight: 11235000 },
  { source: 20, target: 14, weight: 2159000 },
  { source: 20, target: 24, weight: 93000 },
  { source: 20, target: 26, weight: 3819000 },
  { source: 21, target: 8, weight: 7553565 },
  { source: 22, target: 1, weight: 816091 },
  { source: 22, target: 16, weight: 2185000 },
  { source: 23, target: 10, weight: 1919400 },
  { source: 23, target: 11, weight: 423107 },
  { source: 23, target: 19, weight: 4777438 },
  { source: 24, target: 2, weight: 9983795 },
  { source: 24, target: 16, weight: 57000 },
  { source: 24, target: 20, weight: 3154658 },
  { source: 25, target: 5, weight: 327000 },
  { source: 25, target: 26, weight: 18370000 },
  { source: 26, target: 3, weight: 2254688 },
  { source: 26, target: 14, weight: 96800 },
  { source: 26, target: 20, weight: 12574 },
  { source: 26, target: 25, weight: 1000 },
];
