// https://en.wikipedia.org/wiki/Seine
const dataSeine = [
  {
    name: 'Seine',
    discharge: 560,
  },
  {
    name: 'Yonne',
    discharge: 95,
    side: 'l',
  },
  {
    name: 'Loing',
    discharge: 19,
    side: 'l',
  },
  {
    name: 'Eure',
    discharge: 26,
    side: 'l',
  },
  {
    name: 'Risle',
    discharge: 14,
    side: 'l',
  },
  {
    name: 'Ource',
    discharge: 8.6,
    side: 'r',
  },
  {
    name: 'Aube',
    discharge: 34,
    side: 'r',
  },
  {
    name: 'Marne',
    discharge: 100,
    side: 'r',
  },
  {
    name: 'Oise',
    discharge: 110,
    side: 'r',
  },
  {
    name: 'Epte',
    discharge: 9.8,
    side: 'r',
  },
];

// https://en.wikipedia.org/wiki/Po_(river)#Tributaries
const dataPo = [
  {
    name: 'Pellice',
    length: 53,
  },
  {
    name: 'Varaita',
    length: 75,
  },
  {
    name: 'Maira',
    length: 120,
  },
  {
    name: 'Chisola',
    length: 39.4,
  },
  {
    name: 'Sangone',
    length: 46,
  },
  {
    name: 'Dora Riparia',
    length: 125,
  },
  {
    name: 'Stura di Lanzo',
    length: 68.8,
  },
  {
    name: 'Malone',
    length: 47.7,
  },
  {
    name: 'Orco',
    length: 89.568,
  },
  {
    name: 'Dora Baltea',
    length: 168.3,
  },
  {
    name: 'Stura del Monferrato',
    length: 36.7,
  },
  {
    name: 'Sesia',
    length: 139.6,
  },
  {
    name: 'Rotaldo',
    length: 40,
  },
  {
    name: 'Grana del Monferrato',
    length: 47,
  },
  {
    name: 'Tanaro',
    length: 276,
  },
  {
    name: 'Scrivia',
    length: 117.2,
  },
  {
    name: 'Agogna',
    length: 140,
  },
  {
    name: 'Curone',
    length: 59.482,
  },
  {
    name: 'Staffora',
    length: 58,
  },
  {
    name: 'Ticino ',
    length: 248,
  },
  {
    name: 'Versa ',
    length: 30,
  },
  {
    name: 'Tidone',
    length: 47,
  },
  {
    name: 'Lambro',
    length: 130,
  },
  {
    name: 'Trebbia',
    length: 118,
  },
  {
    name: 'Nure',
    length: 75,
  },
  {
    name: 'Adda',
    length: 313,
  },
  {
    name: 'Arda',
    length: 56,
  },
  {
    name: 'Taro',
    length: 126,
  },
  {
    name: 'Parma',
    length: 92,
  },
  {
    name: 'Enza',
    length: 93,
  },
  {
    name: 'Crostolo',
    length: 55,
  },
  {
    name: 'Oglio',
    length: 280,
  },
  {
    name: 'Mincio',
    length: 194,
  },
  {
    name: 'Secchia',
    length: 172,
  },
  {
    name: 'Panaro',
    length: 148,
  },
];

const main = d3.select('main');
main.append('h1').text('Tributaries');

/* Seine — Sankey */

/* Po — Radial */