const data = [
  { name: 'Lewis Hamilton', races: 266, wins: 95 },
  { name: 'Michael Schumacher', races: 306, wins: 91 },
  { name: 'Sebastian Vettel', races: 257, wins: 53 },
  { name: 'Alain Prost', races: 199, wins: 51 },
  { name: 'Ayrton Senna', races: 161, wins: 41 },
  { name: 'Fernando Alonso', races: 311, wins: 32 },
  { name: 'Nigel Mansell', races: 187, wins: 31 },
  { name: 'Jackie Stewart', races: 99, wins: 27 },
  { name: 'Niki Lauda', races: 171, wins: 25 },
  { name: 'Jim Clark', races: 72, wins: 25 },
  { name: 'Juan Manuel Fangio', races: 51, wins: 24 },
  { name: 'Nico Rosberg', races: 206, wins: 23 },
  { name: 'Nelson Piquet', races: 204, wins: 23 },
  { name: 'Damon Hill', races: 115, wins: 22 },
  { name: 'Kimi Räikkönen', races: 329, wins: 21 },
  { name: 'Mika Häkkinen', races: 161, wins: 20 },
  { name: 'Stirling Moss', races: 66, wins: 16 },
  { name: 'Jenson Button', races: 306, wins: 15 },
  { name: 'Graham Hill', races: 176, wins: 14 },
  { name: 'Emerson Fittipaldi', races: 144, wins: 14 },
  { name: 'Jack Brabham', races: 126, wins: 14 },
  { name: 'David Coulthard', races: 246, wins: 13 },
  { name: 'Alberto Ascari', races: 32, wins: 13 },
  { name: 'Carlos Reutemann', races: 146, wins: 12 },
  { name: 'Alan Jones', races: 116, wins: 12 },
  { name: 'Mario Andretti', races: 128, wins: 12 },
  { name: 'Jacques Villeneuve', races: 163, wins: 11 },
  { name: 'Felipe Massa', races: 269, wins: 11 },
  { name: 'Rubens Barrichello', races: 322, wins: 11 },
  { name: 'Max Verstappen', races: 119, wins: 10 },
  { name: 'Jody Scheckter', races: 112, wins: 10 },
  { name: 'Ronnie Peterson', races: 123, wins: 10 },
  { name: 'James Hunt', races: 92, wins: 10 },
  { name: 'Gerhard Berger', races: 210, wins: 10 },
  { name: 'Mark Webber', races: 215, wins: 9 },
  { name: 'Valtteri Bottas', races: 156, wins: 9 },
  { name: 'Jacky Ickx', races: 114, wins: 8 },
  { name: 'Denny Hulme', races: 112, wins: 8 },
  { name: 'Daniel Ricciardo', races: 188, wins: 7 },
  { name: 'Juan Pablo Montoya', races: 94, wins: 7 },
  { name: 'René Arnoux', races: 149, wins: 7 },
  { name: 'Gilles Villeneuve', races: 67, wins: 6 },
  { name: 'John Surtees', races: 111, wins: 6 },
  { name: 'Ralf Schumacher', races: 180, wins: 6 },
  { name: 'Jochen Rindt', races: 60, wins: 6 },
  { name: 'Riccardo Patrese', races: 256, wins: 6 },
  { name: 'Jacques Laffite', races: 176, wins: 6 },
  { name: 'Tony Brooks', races: 38, wins: 6 },
  { name: 'John Watson', races: 152, wins: 5 },
  { name: 'Keke Rosberg', races: 114, wins: 5 },
  { name: 'Clay Regazzoni', races: 132, wins: 5 },
  { name: 'Nino Farina', races: 33, wins: 5 },
  { name: 'Michele Alboreto', races: 194, wins: 5 },
  { name: 'Bruce McLaren', races: 100, wins: 4 },
  { name: 'Eddie Irvine', races: 146, wins: 4 },
  { name: 'Dan Gurney', races: 86, wins: 4 },
  { name: 'Didier Pironi', races: 70, wins: 3 },
  { name: 'Phil Hill', races: 49, wins: 3 },
  { name: 'Johnny Herbert', races: 161, wins: 3 },
  { name: 'Mike Hawthorn', races: 45, wins: 3 },
  { name: 'Heinz-Harald Frentzen', races: 156, wins: 3 },
  { name: 'Giancarlo Fisichella', races: 229, wins: 3 },
  { name: 'Peter Collins', races: 32, wins: 3 },
  { name: 'Thierry Boutsen', races: 163, wins: 3 },
  { name: 'Bill Vukovich', races: 5, wins: 2 },
  { name: 'Wolfgang von Trips', races: 27, wins: 2 },
  { name: 'Maurice Trintignant', races: 82, wins: 2 },
  { name: 'Patrick Tambay', races: 114, wins: 2 },
  { name: 'Jo Siffert', races: 96, wins: 2 },
  { name: 'Pedro Rodríguez', races: 54, wins: 2 },
  { name: 'Peter Revson', races: 30, wins: 2 },
  { name: 'Charles Leclerc', races: 59, wins: 2 },
  { name: 'Jean-Pierre Jabouille', races: 49, wins: 2 },
  { name: 'José Froilán González', races: 26, wins: 2 },
  { name: 'Patrick Depailler', races: 95, wins: 2 },
  { name: 'Elio de Angelis', races: 108, wins: 2 },
  { name: 'Rodger Ward', races: 12, wins: 1 },
  { name: 'Lee Wallard', races: 2, wins: 1 },
  { name: 'Jarno Trulli', races: 252, wins: 1 },
  { name: 'Piero Taruffi', races: 18, wins: 1 },
  { name: 'Bob Sweikert', races: 5, wins: 1 },
  { name: 'Ludovico Scarfiotti', races: 10, wins: 1 },
  { name: 'Troy Ruttman', races: 8, wins: 1 },
  { name: 'Jim Rathmann', races: 10, wins: 1 },
  { name: 'Sergio Pérez', races: 191, wins: 1 },
  { name: 'Johnnie Parsons', races: 9, wins: 1 },
  { name: 'Olivier Panis', races: 157, wins: 1 },
  { name: 'Carlos Pace', races: 72, wins: 1 },
  { name: 'Gunnar Nilsson', races: 31, wins: 1 },
  { name: 'Alessandro Nannini', races: 76, wins: 1 },
  { name: 'Luigi Musso', races: 24, wins: 1 },
  { name: 'Jochen Mass', races: 105, wins: 1 },
  { name: 'Pastor Maldonado', races: 95, wins: 1 },
  { name: 'Robert Kubica', races: 97, wins: 1 },
  { name: 'Heikki Kovalainen', races: 111, wins: 1 },
  { name: 'Innes Ireland', races: 50, wins: 1 },
  { name: 'Sam Hanks', races: 8, wins: 1 },
  { name: 'Richie Ginther', races: 52, wins: 1 },
  { name: 'Peter Gethin', races: 30, wins: 1 },
  { name: 'Pierre Gasly', races: 64, wins: 1 },
  { name: 'Pat Flaherty', races: 6, wins: 1 },
  { name: 'Luigi Fagioli', races: 7, wins: 1 },
  { name: 'François Cevert', races: 46, wins: 1 },
  { name: 'Jimmy Bryan', races: 9, wins: 1 },
  { name: 'Vittorio Brambilla', races: 74, wins: 1 },
  { name: 'Jo Bonnier', races: 104, wins: 1 },
  { name: 'Jean-Pierre Beltoise', races: 86, wins: 1 },
  { name: 'Lorenzo Bandini', races: 42, wins: 1 },
  { name: 'Giancarlo Baghetti', races: 21, wins: 1 },
  { name: 'Jean Alesi', races: 201, wins: 1 },
];

const xAccessor = d => (d.wins / d.races);
// const xAccessor = d => d.wins;
const yAccessor = d => d.name;

const dimensions = {
  width: 800,
  height: 1800,
  margin: {
    top: 25,
    right: 10,
    bottom: 10,
    left: 120,
  },
};

dimensions.boundedWidth =
  dimensions.width - (dimensions.margin.left + dimensions.margin.right);
dimensions.boundedHeight =
  dimensions.height - (dimensions.margin.top + dimensions.margin.bottom);

const wrapper = d3
  .select('body')
  .append('svg')
  .attr('width', dimensions.width)
  .attr('height', dimensions.height);

const bounds = wrapper
  .append('g')
  .attr(
    'transform',
    `translate(${dimensions.margin.left} ${dimensions.margin.top})`
  );

const groupAxis = bounds.append('g');
const groupBars = bounds.append('g');

const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, xAccessor)])
  .range([0, dimensions.boundedWidth]);

const xAxisGenerator = d3.axisTop().scale(xScale);

groupAxis.append('g').call(xAxisGenerator);

const yScale = d3
  .scaleBand()
  .domain(data.map(yAccessor))
  .range([0, dimensions.boundedHeight])
  .padding(0.2);

const yAxisGenerator = d3.axisLeft().scale(yScale);

groupAxis.append('g').call(yAxisGenerator);

const bars = groupBars
  .append('g')
  .selectAll('rect')
  .data(data)
  .join('rect')
  .attr('x', 0)
  .attr('y', d => yScale(yAccessor(d)))
  .attr('width', d => xScale(xAccessor(d)))
  .attr('height', yScale.bandwidth())
  .attr('fill', '#e7962a');

