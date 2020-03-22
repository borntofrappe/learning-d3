// lineRadial
const { lineRadial, max } = d3;
const getRandomPercentage = () => Math.floor(Math.random() * 100);

const dataPoints = 10;
const data = Array(dataPoints).fill().map(() => ({
  value: getRandomPercentage(),
  id: Math.random()
}));
const dataMax = max(data, d => d.value);


const width = 200;
const height = 200;
