const { select, schemeCategory10 } = d3;
const { length } = schemeCategory10;
const randomInt = () => Math.floor(Math.random() * 90) + 1;
const randomDataPoint = () => ({
  id: Math.random(),
  value: randomInt(),
});

let data = Array(5)
  .fill()
  .map(() => randomDataPoint());

const main = select('main');

main.append('h1').text('D3 Data Join');

const div = main.append('div');
const buttonAdd = div.append('button').text('Add');
const buttonRemove = div.append('button').text('Remove');

const articleEnterUpdateExit = main.append('article');
articleEnterUpdateExit.append('h2').text('Enter-update-exit');

const articleJoin = main.append('article');
articleJoin.append('h2').text('Join');

function enterUpdateExit(data) {
  const update = articleEnterUpdateExit.selectAll('span').data(data, d => d.id);

  const enter = update.enter();
  const exit = update.exit();

  enter
    .append('span')
    .text(d => d.value)
    .style('border-color', (d, i) => schemeCategory10[i % length])
    .style('transform', 'scale(0)')
    .transition()
    .duration(500)
    .style('transform', 'scale(1)');
  exit
    .transition()
    .duration(500)
    .style('transform', 'scale(0)')
    .remove();
}

function joinSelection(data) {
  articleJoin
    .selectAll('span')
    .data(data, d => d.id)
    .join(
      enter =>
        enter
          .append('span')
          .text(d => d.value)
          .style('border-color', (d, i) => schemeCategory10[i % length])
          .style('transform', 'scale(0)')
          .transition()
          .delay(100)
          .duration(500)
          .style('transform', 'scale(1)'),
      // see note at the end of the selection_join markdown
      update => undefined,
      exit =>
        exit
          .transition()
          .duration(500)
          .style('transform', 'scale(0)')
          .remove()
    );
}

enterUpdateExit(data);
joinSelection(data);

buttonAdd.on('click', () => {
  const index = Math.floor(Math.random() * data.length);
  const point = {
    id: Math.random(),
    value: randomInt(),
  };
  data = [...data.slice(0, index), point, ...data.slice(index)];
  enterUpdateExit(data);
  joinSelection(data);
});

buttonRemove.on('click', () => {
  const index = Math.floor(Math.random() * data.length);
  data = [...data.slice(0, index), ...data.slice(index + 1)];
  enterUpdateExit(data);
  joinSelection(data);
});
