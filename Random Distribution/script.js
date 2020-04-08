// DATA
const { randomNormal, select, line, area, scaleLinear } = d3;

// mean/median/mode
const mu = 10;
// standard deviation
const sigma = 2;

const dataPoints = 20;
const data = Array(dataPoints).fill().map(() => randomNormal(mu, sigma)());

// INTRODUCTORY HTML
const root = select('#root');
root.append('h1').text('Random Normal');
root.append('p').html('Exploring the <code>d3-random</code> module with a <strong>normal distribution</strong>');

// VISUALIZATION
const main = root.append('main');
main.append('svg').attr('viewBox', '0 0 150 100');
main.append('button').text('Add data point');




// CLOSING LINKS
root.append('h2').text('Useful Links');
const links = root.append('ul');
links.append('li').append('a').attr('href', 'https://github.com/d3/d3-random').append('code').text('d3.random')
links.append('li').append('a').attr('href', 'https://en.wikipedia.org/wiki/Normal_distribution').text('Normal Distribution')