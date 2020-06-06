import React from 'react';
import { href, data } from './data.js';
import * as d3 from 'd3';

function App() {
  const margin = {
    top: 10,
    right: 15,
    bottom: 30,
    left: 50,
  };

  const padding = 5;

  const width = 500;
  const height = 150;

  const max = d3.max(data, (d) => d.value);
  const min = d3.min(data, (d) => d.value);
  const extreme = d3.max([Math.abs(max), Math.abs(min)]);

  const timeParse = d3.timeParse('%Y %m');
  const timeFormat = d3.timeFormat('%Y');
  const valueFormat = d3.format('.1f');

  const xScale = d3
    .scaleTime()
    .domain(d3.extent(data, (d) => timeParse(d.date)))
    .range([padding, width - padding]);

  const yScale = d3
    .scaleLinear()
    .domain([extreme * -1, extreme])
    .range([height, 0])
    .nice();

  const fill = (date, value) => {
    const isMay = timeParse(date).getMonth() === 5;
    if (isMay) {
      return value > 0 ? '#A10C03' : '#162A81';
    }
    return value > 0 ? '#FF300F' : '#4E98CA';
  };

  const xTicks = 6;
  const xAxis = Array(xTicks - 1)
    .fill()
    .map((v, index, { length }) => (index * width) / length);
  xAxis.push(width);

  const yTicks = 6;
  const yAxis = Array(yTicks - 1)
    .fill()
    .map((v, index, { length }) => (index * height) / length);
  yAxis.push(height);

  return (
    <main>
      <h1>
        <a href={href}>Monthly global surface air temperature anomalies</a>
      </h1>
      <svg
        viewBox={`-${margin.left} -${margin.top} ${
          width + (margin.left + margin.right)
        } ${height + (margin.top + margin.bottom)}`}
        width={width + (margin.left + margin.right)}
        height={height + (margin.top + margin.bottom)}
      >
        <g className="vis">
          {data.map(({ date, value }, index, { length }) => (
            <rect
              key={date}
              fill={fill(date, value)}
              x={xScale(timeParse(date))}
              y={value > 0 ? yScale(value) : yScale(0)}
              width={width / length}
              height={
                value > 0
                  ? yScale(0) - yScale(value)
                  : yScale(value) - yScale(0)
              }
            />
          ))}

          <path
            d={`M 0 ${yScale(0)} h ${width}`}
            fill="none"
            stroke="currentColor"
          />
        </g>
        <g className="axes">
          <path
            d={`M 0 0 h ${width} v ${height} h -${width} z`}
            fill="none"
            stroke="currentColor"
          />
          <g class="axis axis-x" transform={`translate(0 ${height + 20})`}>
            {xAxis.map((tick) => (
              <g key={tick} transform={`translate(${tick} 0)`}>
                <text textAnchor="middle">
                  {timeFormat(xScale.invert(tick))}
                </text>
              </g>
            ))}
          </g>

          <g class="axis axis-y" transform="translate(-5 0)">
            {yAxis.map((tick) => (
              <g key={tick} transform={`translate(0 ${tick})`}>
                <text textAnchor="end" dominantBaseline="middle">
                  {valueFormat(yScale.invert(tick))}
                </text>
              </g>
            ))}
          </g>
          <text x={-margin.left} y={yScale(0)}>
            °C
          </text>
        </g>
      </svg>
    </main>
  );
}

export default App;
