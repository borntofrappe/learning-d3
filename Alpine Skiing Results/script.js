/* DATA
https://www.fis-ski.com/DB/general/results.html?sectorcode=AL&raceid=104402#details
*/
const data = [
  {bib: 1, name: "Gut-behrami Lara", nationality: "SUI", intervals: [20.08,18.97,15.39,15.69,20.31,18.18,15.15,14.58]},
  {bib: 2, name: "Shiffrin Mikaela", nationality: "USA", intervals: [19.15,18.38,15.16,15.66,20.35,18.26,15.37,14.7]},
  {bib: 3, name: "Vlhova Petra", nationality: "SVK", intervals: [19.33,18.45,14.89,15.84,20.3,17.94,15.16,14.75]},
  {bib: 4, name: "Brignone Federica", nationality: "ITA", intervals: [19.66,18.61,15.14,15.85,20.24,18.16,15.21,15.22]},
  {bib: 5, name: "Worley Tessa", nationality: "FRA", intervals: [19.46,19.03,15.31,15.87,20.33,18.18,15.35,14.88]},
  {bib: 6, name: "Bassino Marta", nationality: "ITA", intervals: [19.43,18.64,15.21,15.91,20.44,17.97,15.34,14.68]},
  {bib: 7, name: "Gisin Michelle", nationality: "SUI", intervals: [19.75,18.9,15.36,15.87,20.52,18.01,14.96,14.97]},
  {bib: 10, name: "Robinson Alice", nationality: "NZL", intervals: [19.57,18.85,15.31,15.6,19.91,17.87,14.91,14.8]},
  {bib: 12, name: "Hector Sara", nationality: "SWE", intervals: [19.98,19.26,15.55,15.64,20.5,18.32,15.57,14.87]},
  {bib: 13, name: "Siebenhofer Ramona", nationality: "AUT", intervals: [19.63,19.12,15.36,15.92,20.12,17.92,15.18,14.75]},
  {bib: 14, name: "Liensberger Katharina", nationality: "AUT", intervals: [19.74,18.78,15.35,15.99,20.4,18.04,15.09,14.79]},
  {bib: 15, name: "Holdener Wendy", nationality: "SUI", intervals: [19.76,19.11,15.13,15.75,20.48,18.43,15.47,15.3]},
  {bib: 16, name: "Curtoni Elena", nationality: "ITA", intervals: [19.82,19.17,15.53,16.3,20.62,18.51,15.52,15.4]},
  {bib: 17, name: "Brunner Stephanie", nationality: "AUT", intervals: [19.72,19.12,15.77,16.26,20.12,18.04,15.52,15.07]},
  {bib: 18, name: "Mowinckel Ragnhild", nationality: "NOR", intervals: [19.64,19.09,15.34,15.95,20.39,18.1,15.2,14.91]},
  {bib: 20, name: "Bucik Ana", nationality: "SLO", intervals: [19.64,19.26,15.26,16.06,20.39,18.23,15.07,15.07]},
  {bib: 21, name: "Frasse Sombet Coralie", nationality: "FRA", intervals: [19.61,19.37,15.66,16.38,20.32,18.16,15.01,15.1]},
  {bib: 23, name: "Robnik Tina", nationality: "SLO", intervals: [19.54,18.88,15.6,16.12,20.35,18.15,15.38,15.1]},
  {bib: 26, name: "Moltzan Paula", nationality: "USA", intervals: [19.7,18.98,15.43,16.17,20.44,18.15,15.54,15.24]},
  {bib: 29, name: "Meillard Melanie", nationality: "SUI", intervals: [19.78,19.24,15.81,16.42,20.41,18.6,15.78,15.35]},
  {bib: 31, name: "Hurt A J", nationality: "USA", intervals: [19.71,19.61,15.88,16.55,20.42,18.26,15.52,14.87]},
  {bib: 39, name: "Norbye Kaja", nationality: "NOR", intervals: [20.23,19.57,15.77,16.19,20.36,18.09,15.39,15.25]},
  {bib: 44, name: "Wild Simone", nationality: "SUI", intervals: [19.77,19.35,15.29,16.01,20.4,18.18,15.17,15.01]},
  {bib: 45, name: "Kasper Vanessa", nationality: "SUI", intervals: [20.01,19.45,15.49,16.34,20.74,18.33,15.33,15.05]},
  {bib: 49, name: "Slokar Andreja", nationality: "SLO", intervals: [19.89,19.12,15.51,16.26,20.37,18.16,15.18,14.93]},
  {bib: 50, name: "Gray Cassidy", nationality: "CAN", intervals: [20.08,19.49,15.52,16.23,20.87,18.61,15.83,15.34]},
  {bib: 56, name: "Pirovano Laura", nationality: "ITA", intervals: [20.16,19.37,15.52,16.42,20.65,18.48,15.32,15.73]},
];

// for each athlete consider the cumulative interval and the position at each interval
data.forEach(athlete => {
  athlete.cumulative = athlete.intervals.reduce((acc, curr) => [...acc, acc[acc.length - 1] + curr], [0]).slice(1);
})

data.forEach(athlete => {
  athlete.positions = athlete.cumulative.map((interval, index) => {
    const classification = [...data].sort((a, b) => a.cumulative[index] > b.cumulative[index] ? 1 : -1);
    return classification.findIndex(({name}) => name === athlete.name) + 1
  });
});

const main = d3.select('main')

main.append('h1').text('Swoosh')
main.append('p').html('Highlighting the results from the recent <a href="https://www.fis-ski.com/DB/general/results.html?sectorcode=AL&raceid=104402#details">giant slalom</a> in Janka, Slovakia.')

const dimensions = {
  width: 600,
  height: 600,
  margin: {
    top: 60,
    right: 10,
    bottom: 20,
    left: 10
  }
}

dimensions.boundedWidth = dimensions.width - (dimensions.margin.left + dimensions.margin.right)
dimensions.boundedHeight = dimensions.width - (dimensions.margin.top + dimensions.margin.bottom)

const wrapper = main.append('svg').attr('viewBox', [0, 0, dimensions.width, dimensions.height])
const bounds = wrapper
  .append('g')
  .attr('transform', `translate(${dimensions.margin.left} ${dimensions.margin.top})`)