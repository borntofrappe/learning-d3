const { select, format, timeFormat, timeParse, scaleLinear, scaleTime, max, min, extent, lineRadial, areaRadial, curveCatmullRomClosed, schemeAccent } = d3;
// const url = "https://trends.google.com/trends/explore?date=2019-01-01%202020-01-01&geo=US&q=spring,summer,fall,winter";

console.log(schemeAccent)
// fixed set of data
const data = [
  { date: '2019-01-06', spring: 42, summer: 23, fall: 18, winter: 42 },
  { date: '2019-01-13', spring: 42, summer: 23, fall: 19, winter: 46 },
  { date: '2019-01-20', spring: 41, summer: 24, fall: 18, winter: 42 },
  { date: '2019-01-27', spring: 42, summer: 25, fall: 19, winter: 41 },
  { date: '2019-02-03', spring: 46, summer: 25, fall: 18, winter: 29 },
  { date: '2019-02-10', spring: 47, summer: 26, fall: 18, winter: 29 },
  { date: '2019-02-17', spring: 55, summer: 28, fall: 18, winter: 28 },
  { date: '2019-02-24', spring: 64, summer: 29, fall: 19, winter: 24 },
  { date: '2019-03-03', spring: 73, summer: 31, fall: 20, winter: 23 },
  { date: '2019-03-10', spring: 77, summer: 32, fall: 19, winter: 19 },
  { date: '2019-03-17', spring: 97, summer: 36, fall: 22, winter: 16 },
  { date: '2019-03-24', spring: 65, summer: 38, fall: 30, winter: 15 },
  { date: '2019-03-31', spring: 60, summer: 40, fall: 20, winter: 15 },
  { date: '2019-04-07', spring: 60, summer: 44, fall: 20, winter: 16 },
  { date: '2019-04-14', spring: 53, summer: 45, fall: 20, winter: 14 },
  { date: '2019-04-21', spring: 49, summer: 48, fall: 20, winter: 14 },
  { date: '2019-04-28', spring: 43, summer: 51, fall: 20, winter: 15 },
  { date: '2019-05-05', spring: 40, summer: 54, fall: 19, winter: 14 },
  { date: '2019-05-12', spring: 37, summer: 57, fall: 20, winter: 14 },
  { date: '2019-05-19', spring: 35, summer: 68, fall: 20, winter: 13 },
  { date: '2019-05-26', spring: 33, summer: 76, fall: 19, winter: 13 },
  { date: '2019-06-02', spring: 32, summer: 78, fall: 19, winter: 12 },
  { date: '2019-06-09', spring: 30, summer: 74, fall: 20, winter: 13 },
  { date: '2019-06-16', spring: 30, summer: 88, fall: 24, winter: 13 },
  { date: '2019-06-23', spring: 29, summer: 75, fall: 22, winter: 13 },
  { date: '2019-06-30', spring: 29, summer: 76, fall: 21, winter: 13 },
  { date: '2019-07-07', spring: 29, summer: 76, fall: 27, winter: 13 },
  { date: '2019-07-14', spring: 29, summer: 60, fall: 25, winter: 14 },
  { date: '2019-07-21', spring: 29, summer: 52, fall: 27, winter: 15 },
  { date: '2019-07-28', spring: 28, summer: 47, fall: 29, winter: 15 },
  { date: '2019-08-04', spring: 28, summer: 42, fall: 32, winter: 15 },
  { date: '2019-08-11', spring: 29, summer: 39, fall: 38, winter: 17 },
  { date: '2019-08-18', spring: 28, summer: 34, fall: 45, winter: 17 },
  { date: '2019-08-25', spring: 28, summer: 28, fall: 48, winter: 20 },
  { date: '2019-09-01', spring: 28, summer: 25, fall: 53, winter: 19 },
  { date: '2019-09-08', spring: 28, summer: 21, fall: 58, winter: 21 },
  { date: '2019-09-15', spring: 28, summer: 20, fall: 66, winter: 21 },
  { date: '2019-09-22', spring: 28, summer: 19, fall: 81, winter: 23 },
  { date: '2019-09-29', spring: 29, summer: 19, fall: 66, winter: 27 },
  { date: '2019-10-06', spring: 29, summer: 19, fall: 67, winter: 32 },
  { date: '2019-10-13', spring: 30, summer: 17, fall: 60, winter: 32 },
  { date: '2019-10-20', spring: 29, summer: 18, fall: 53, winter: 31 },
  { date: '2019-10-27', spring: 29, summer: 20, fall: 55, winter: 40 },
  { date: '2019-11-03', spring: 30, summer: 18, fall: 45, winter: 48 },
  { date: '2019-11-10', spring: 29, summer: 18, fall: 30, winter: 57 },
  { date: '2019-11-17', spring: 29, summer: 19, fall: 28, winter: 45 },
  { date: '2019-11-24', spring: 26, summer: 16, fall: 24, winter: 46 },
  { date: '2019-12-01', spring: 29, summer: 16, fall: 21, winter: 58 },
  { date: '2019-12-08', spring: 28, summer: 17, fall: 20, winter: 54 },
  { date: '2019-12-15', spring: 29, summer: 17, fall: 20, winter: 63 },
  { date: '2019-12-22', spring: 31, summer: 18, fall: 18, winter: 100 },
  { date: '2019-12-29', spring: 37, summer: 21, fall: 18, winter: 48 },
];

const parseDate = timeParse("%Y-%m-%d");
const formatDate = timeFormat("%B %d");

const dataVisualization = ["spring", "summer", "fall", "winter"].map(season => data.map(point => ({
  date: parseDate(point.date),
  value: point[season],
})));
const dataValues = dataVisualization.reduce((acc, curr) => [...acc, ...curr.map(({ value }) => value)], []);
const dataDates = data.map(({date}) => parseDate(date));

const dayOne = dataDates[0];
const dayLast = dataDates[dataDates.length - 1];

const root = select('#root')
root.append('h1').text('D3 Radial');
root.append('p').text(`Google trends for the four seasons, between ${formatDate(dayOne)} and ${formatDate(dayLast)}`);


const size = 500;
const margin = 25;

const angleScale = scaleTime().domain(extent(dataDates)).range([0, Math.PI * 2]);
const radiusScale = scaleLinear().domain([0, max(dataValues)]).range([0, size / 2]).nice();

const date = new Date();
date.setFullYear(date.getFullYear() - 1);
const angle = angleScale(date) * 180 / Math.PI;

const rootVisualization = root
  .append('svg')
  .attr('viewBox', `${-margin} ${-margin} ${size + margin * 2} ${size + margin * 2}`).attr('width', size).attr('height', size)
  .append('g')
  .attr('transform', `translate(${size / 2} ${size / 2}) rotate(${-angle})`);



const line = lineRadial()
  .angle(d => angleScale(d.date))
  .radius(d => radiusScale(d.value)).curve(curveCatmullRomClosed);

const area = areaRadial()
  .angle(d => angleScale(d.date))
  .outerRadius(d => radiusScale(d.value)).curve(curveCatmullRomClosed);


dataVisualization.forEach((season, index) => {
  rootVisualization.append('path').attr('d', line(season)).attr('fill', "none").attr('stroke', schemeAccent[index]).attr('stroke-width', 5);
  rootVisualization.append('path').attr('d', area(season)).attr('fill', schemeAccent[index]).attr('stroke', "none").attr('opacity', '0.25');
});
