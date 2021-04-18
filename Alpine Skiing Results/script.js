/* DATA
https://www.fis-ski.com/DB/general/results.html?sectorcode=AL&raceid=104410#details
*/
const dataset = {
  run1: [
    {bib: 1, name: "Mair Chiara", nationality: "AUT", intervals: [12.67,28.01,42.26,54.89]}, 
    {bib: 2, name: "Shiffrin Mikaela", nationality: "USA", intervals: [12.26,27.22,40.7,52.75]}, 
    {bib: 3, name: "Duerr Lena", nationality: "GER", intervals: [12.32,27.3,41.22,53.43]}, 
    {bib: 4, name: "Vlhova Petra", nationality: "SVK", intervals: [14.23,29.32,43.43,55.7]}, 
    {bib: 5, name: "Holdener Wendy", nationality: "SUI", intervals: [12.31,27.48,41.56,53.67]}, 
    {bib: 6, name: "Gisin Michelle", nationality: "SUI", intervals: [12.61,28.04,42.13,54.43]}, 
    {bib: 7, name: "Liensberger Katharina", nationality: "AUT", intervals: [12.42,27.15,40.95,52.94]}, 
    {bib: 8, name: "Dubovska Martina", nationality: "CZE", intervals: [12.55,27.81,42.36,54.75]}, 
    {bib: 9, name: "Mielzynski Erin", nationality: "CAN", intervals: [12.66,28.19,42.61,55.09]}, 
    {bib: 10, name: "Bucik Ana", nationality: "SLO", intervals: [12.43,28.26,42.6,54.97]}, 
    {bib: 11, name: "Gritsch Franziska", nationality: "AUT", intervals: [12.48,27.69,41.86,55.28]}, 
    {bib: 12, name: "St-germain Laurence", nationality: "CAN", intervals: [12.71,28.25,42.56,54.85]}, 
    {bib: 13, name: "Curtoni Irene", nationality: "ITA", intervals: [12.68,28.3,42.62,55.04]}, 
    {bib: 14, name: "Lysdahl Kristin", nationality: "NOR", intervals: [12.52,27.78,41.96,54.25]}, 
    {bib: 15, name: "Moltzan Paula", nationality: "USA", intervals: [12.58,27.94,41.74,54.21]}, 
    {bib: 16, name: "Huber Katharina", nationality: "AUT", intervals: [12.96,28.93,43.69,56.43]}, 
    {bib: 17, name: "Slokar Andreja", nationality: "SLO", intervals: [12.7,28.09,42.35,54.77]}, 
    {bib: 18, name: "Rast Camille", nationality: "SUI", intervals: [12.79,28.47,42.88,55.4]}, 
    {bib: 19, name: "Wikstroem Emelie", nationality: "SWE", intervals: [12.68,28.01,42.32,54.9]}, 
    {bib: 20, name: "Hector Sara", nationality: "SWE", intervals: [12.51,28.21,42.42,54.77]}, 
    {bib: 21, name: "Noens Nastasia", nationality: "FRA", intervals: [12.55,27.99,42.47,54.81]}, 
    {bib: 22, name: "Riis-johannessen Kristina", nationality: "NOR", intervals: [12.59,27.79,41.96,54.31]}, 
    {bib: 23, name: "Gallhuber Katharina", nationality: "AUT", intervals: [12.71,28.25,42.72,55.31]}, 
    {bib: 24, name: "Stjernesund Thea Louise", nationality: "NOR", intervals: [12.5,27.68]}, 
    {bib: 25, name: "Ando Asa", nationality: "JPN", intervals: [13.03,28.57,42.93,55.31]}, 
    {bib: 26, name: "Peterlini Martina", nationality: "ITA", intervals: [13.04,29.07,43.51,56.13]}, 
    {bib: 27, name: "Nullmeyer Ali", nationality: "CAN", intervals: [12.86,28.01,42.45,54.88]}, 
    {bib: 28, name: "O Brien Nina", nationality: "USA", intervals: [12.57,28.13,42.68,55.3]}, 
    {bib: 29, name: "Popovic Leona", nationality: "CRO", intervals: [12.99,28.56,42.92,55.57]}, 
    {bib: 30, name: "Fermbaeck Elsa", nationality: "SWE", intervals: []},
    {bib: 31, name: "Hilzinger Jessica", nationality: "GER", intervals: [12.86,28.58,43.21]}, 
    {bib: 32, name: "Filser Andrea", nationality: "GER", intervals: [13.1,28.6,43.17,55.89]}, 
    {bib: 33, name: "Sporer Marie- Therese", nationality: "AUT", intervals: [12.91,28.62,42.81,55.48]}, 
    {bib: 34, name: "Guest Charlie", nationality: "GBR", intervals: [12.49,28.23,43.09,55.78]}, 
    {bib: 35, name: "Remme Roni", nationality: "CAN", intervals: [13.01,28.96,43.34,56.12]}, 
    {bib: 36, name: "Hrovat Meta", nationality: "SLO", intervals: [12.92,28.9,43.66,56.3]}, 
    {bib: 37, name: "Lapanja Lila", nationality: "USA", intervals: [12.89,28.51]}, 
    {bib: 38, name: "Capova Gabriela", nationality: "CZE", intervals: [12.96,28.7,43.52,56.52]}, 
    {bib: 39, name: "Rask Sara", nationality: "SWE", intervals: [12.68,28.9,43.54,56]}, 
    {bib: 40, name: "Komsic Andrea", nationality: "CRO", intervals: [13.13,29.06,43.72,56.52]}, 
    {bib: 41, name: "Saefvenberg Charlotta", nationality: "SWE", intervals: [12.74,28.5,43.05,55.77]}, 
    {bib: 42, name: "Hensien Katie", nationality: "USA", intervals: [13.11,28.86,43.41,56.02]}, 
    {bib: 43, name: "Escane Doriane", nationality: "FRA", intervals: [12.84,28.78,43.17,56.15]}, 
    {bib: 44, name: "Stiegler Resi", nationality: "USA", intervals: [12.75,28.59,43.34,56.24]}, 
    {bib: 45, name: "Bostroem Mussener Moa", nationality: "SWE", intervals: [12.85,28.79,43.72,56.5]}, 
    {bib: 46, name: "Ceder Liv", nationality: "SWE", intervals: []},
    {bib: 47, name: "Norbye Kaja", nationality: "NOR", intervals: [13.04,29.25,44.21,57.18]}, 
    {bib: 48, name: "Hurt A J", nationality: "USA", intervals: [12.6]}, 
    {bib: 49, name: "Lorenz Bernadette", nationality: "AUT", intervals: [12.89,28.97,43.57,56.41]}, 
    {bib: 50, name: "Vanreusel Kim", nationality: "BEL", intervals: [13.19,29.07,43.99,56.75]}, 
    {bib: 51, name: "Vorre Clara-marie Holmer", nationality: "DEN", intervals: []}
  ],
  run2: [
    {bib: 32, name: "Filser Andrea", nationality: "GER", intervals: [12.99,29.17,42.53,55.55]}, 
    {bib: 34, name: "Guest Charlie", nationality: "GBR", intervals: [12.93,28.95,42.51,55.48]}, 
    {bib: 41, name: "Saefvenberg Charlotta", nationality: "SWE", intervals: [12.89,29.02,42.61,55.44]}, 
    {bib: 4, name: "Vlhova Petra", nationality: "SVK", intervals: [12.67,28.82,42.17,54.94]}, 
    {bib: 29, name: "Popovic Leona", nationality: "CRO", intervals: [13.03,29.21,48.5,61.8]}, 
    {bib: 33, name: "Sporer Marie- Therese", nationality: "AUT", intervals: [13.11,29.11,42.43,55.92]}, 
    {bib: 18, name: "Rast Camille", nationality: "SUI", intervals: [13.02,29.3,43.03,55.88]}, 
    {bib: 23, name: "Gallhuber Katharina", nationality: "AUT", intervals: [12.83,28.87,42.56,55.43]}, 
    {bib: 25, name: "Ando Asa", nationality: "JPN", intervals: [13.5,30.11,43.95,57.45]}, 
    {bib: 28, name: "O Brien Nina", nationality: "USA", intervals: [13.46,29.88,43.65,56.54]}, 
    {bib: 11, name: "Gritsch Franziska", nationality: "AUT", intervals: [12.83,29.07,42.31,55.57]}, 
    {bib: 9, name: "Mielzynski Erin", nationality: "CAN", intervals: [13.12,29.81,43.76,56.88]}, 
    {bib: 13, name: "Curtoni Irene", nationality: "ITA", intervals: []},
    {bib: 10, name: "Bucik Ana", nationality: "SLO", intervals: [13.06,29.83,43.93,57.01]}, 
    {bib: 19, name: "Wikstroem Emelie", nationality: "SWE", intervals: [13.26,30.2,44.00,57.25]}, 
    {bib: 1, name: "Mair Chiara", nationality: "AUT", intervals: [13.24,29.72,43.77,57.11]}, 
    {bib: 27, name: "Nullmeyer Ali", nationality: "CAN", intervals: [12.87,29.37,43.29,56.38]}, 
    {bib: 12, name: "St-germain Laurence", nationality: "CAN", intervals: [12.92,29.28,43.07,56.12]}, 
    {bib: 21, name: "Noens Nastasia", nationality: "FRA", intervals: [13.25,29.86,43.84,57.09]}, 
    {bib: 17, name: "Slokar Andreja", nationality: "SLO", intervals: [13.12,29.72,43.47,56.54]}, 
    {bib: 20, name: "Hector Sara", nationality: "SWE", intervals: [13.2,29.78,43.59,56.44]}, 
    {bib: 8, name: "Dubovska Martina", nationality: "CZE", intervals: [12.84,29.35,43.28,56.28]}, 
    {bib: 6, name: "Gisin Michelle", nationality: "SUI", intervals: [13.28,30.03,43.73,56.63]}, 
    {bib: 22, name: "Riis-johannessen Kristina", nationality: "NOR", intervals: [13.21,29.63,43.4,56.31]}, 
    {bib: 14, name: "Lysdahl Kristin", nationality: "NOR", intervals: [13.16,29.35,43.03,55.95]}, 
    {bib: 15, name: "Moltzan Paula", nationality: "USA", intervals: [13.02,29.33,42.93,55.72]}, 
    {bib: 5, name: "Holdener Wendy", nationality: "SUI", intervals: [13.1,29.42,43.07,55.91]}, 
    {bib: 3, name: "Duerr Lena", nationality: "GER", intervals: [12.96,29.62,43.33,56.28]}, 
    {bib: 7, name: "Liensberger Katharina", nationality: "AUT", intervals: [12.87,29.11,42.34,54.99]}, 
    {bib: 2, name: "Shiffrin Mikaela", nationality: "USA", intervals: [12.95,29.59,43.23,55.9]}
  ]
}

const root = d3.select('#root');

root.append('h1').text('Alpine Skiing Rules');
root
  .append('p')
  .html(
    'To consider how alpine skiing competition often take place, let\'s consider the <a href="https://www.fis-ski.com/DB/general/results.html?sectorcode=AL&raceid=104410">slalom competition in Are, Sweden</a>, which took place on <time datetime="2021-02-13">March 13, 2021</time>.'
  );

function highlightBibNumber() {
  const section = root.append('section');

  section.append('h2').text('Athletes are assigned a bib number');

  const details = section.append('details');
  details
    .append('summary')
    .html(
      'The process changes frequently, but for the <time datetime="2020-10-18">2020</time> to <time datetime="2021-03-21">2021</time> season, the assignment is based on ranking and a touch of randomness.'
    );

  const rules = [
    'athletes in the top ten receive a random odd number between <strong>1</strong> and <strong>19</strong>',
    'athletes from number ten to twenty receive a random even number between <strong>2</strong> and <strong>20</strong>',
    'athletes from number twenty to thirty receive a random number between <strong>21</strong> and <strong>30</strong>',
    'athletes beyond the thirtyest position receive a number based on ranking',
  ];

  details
    .append('ul')
    .selectAll('li')
    .data(rules)
    .enter()
    .append('li')
    .html(d => d);

  const dimensions = {
    width: 600,
    height: 100,
    margin: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
    visualization: {
      top: 75,
    },
    legend: {
      top: 10,
    },
  };

  dimensions.boundedWidth =
    dimensions.width - (dimensions.margin.left + dimensions.margin.right);
  dimensions.boundedHeight =
    dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);
  dimensions.legend.gap = dimensions.visualization.top - dimensions.legend.top;

  const xScale = d3
    .scaleBand()
    .domain(dataset.run1.map(({ bib }) => bib))
    .range([0, dimensions.boundedWidth]);

  const wrapper = section
    .append('svg')
    .attr('viewBox', [0, 0, dimensions.width, dimensions.height]);

  const randomAthleteIndex = Math.floor(Math.random() * dataset.run1.length);

  const highlightGroup = wrapper
    .append('g')
    .attr(
      'transform',
      `translate(${xScale.bandwidth() / 2} ${dimensions.legend.top})`
    )
    .attr('fill', 'currentColor');

  highlightGroup.append('circle').attr('r', 4);
  const highlightHtml = (name, bib) => `<tspan font-weight="bold" font-size="16">${name}</tspan> <tspan font-size="14">received bib number ${bib}</tspan>`

  highlightGroup
    .append('path')
    .attr(
      'd',
      `M 0 0 c 0 ${dimensions.legend.gap} ${xScale(
        randomAthleteIndex + 1
      )} 0 ${xScale(randomAthleteIndex + 1)} ${dimensions.legend.gap}`
    )
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', 2);

  highlightGroup
    .append('text')
    .html(highlightHtml(dataset.run1[randomAthleteIndex].name, randomAthleteIndex + 1))
    .attr('font-size', 16)
    .attr('fill', 'currentColor')
    .attr('x', 20)
    .attr('dominant-baseline', 'middle');

  const athletesGroup = wrapper
    .append('g')
    .attr(
      'transform',
      `translate(${dimensions.margin.left} ${dimensions.margin.top})`
    );

  const athleteGroups = athletesGroup
    .append('g')
    .selectAll('g')
    .data(dataset.run1)
    .enter()
    .append('g')
    .attr(
      'transform',
      ({ bib }) => `translate(${xScale(bib) + xScale.bandwidth() / 2} ${dimensions.visualization.top})`
    );

  athleteGroups
    .append('circle')
    .attr('r', 3)
    .attr('fill', 'currentColor');
  athleteGroups
    .append('text')
    .text(({ bib }) => d3.format('02')(bib))
    .attr('fill', 'currentColor')
    .attr('font-size', 11)
    .attr('text-anchor', 'middle')
    .attr('y', 15)
    .style('opacity', ({bib}) => bib === randomAthleteIndex + 1 ? 1 : 0);

  const delaunay = d3.Delaunay.from(
    dataset.run1,
    d => xScale(d.bib) + xScale.bandwidth() / 2,
    d => 0
  );
  const voronoi = delaunay.voronoi([
    0,
    0,
    dimensions.boundedWidth,
    dimensions.boundedHeight,
  ]);

  athletesGroup
    .append('g')
    .selectAll('path')
    .data(dataset.run1)
    .enter()
    .append('path')
    .attr('d', (d, i) => voronoi.renderCell(i))
    .attr('fill', 'transparent')
    // .attr('stroke', 'currentColor')
    // .attr('stroke-width', 1)
    .on('mouseenter', (event, d) => {
      highlightGroup
        .select('text')
        .html(highlightHtml(d.name, d.bib));

      highlightGroup
        .select('path')
        .attr(
          'd',
          `M 0 0 c 0 ${dimensions.legend.gap} ${xScale(d.bib)} 0 ${xScale(
            d.bib
          )} ${dimensions.legend.gap}`
        );

        athleteGroups
        .select('text')
        .style('opacity', 0)

        athletesGroup
        .select(`g:nth-of-type(${d.bib})`)
        .select('text')
        .style('opacity', 1)
    });

    section.append('p').text('Hover on the visualization to highlight a specific athlete').style('font-size', '0.9em');

}

function highlightFirstRun() {
  const section = root.append('section');

  section.append('h2').text('The first run proceeds in order');
  section.append('p').text('Interval after interval, the athletes compete to the smallest margin.');

  const data = dataset.run1;
}

highlightBibNumber();
highlightFirstRun();
