const data = [10, 20, 30, 40, 50, 55, 60];
const svg = d3.select('svg');
const width = +svg.attr('width'); // getting width from html and + is to convert string to number
const height = +svg.attr('height');
const margin = { top: 20, right: 20, bottom: 30, left: 40 };
const chartWidth = width - margin.left - margin.right;
const chartHeight = height - margin.top - margin.bottom;
const g = svg // group element
  .append('g')
  .attr('transform', `translate(${margin.left},${margin.top})`);
const x = d3
  .scaleBand()
  .domain(data.map((d, i) => i))
  .range([0, chartWidth]) // physical space from left(0) to right(chart width)
  .padding(0.2); //scale band divides in equal parts domain creates array of data and padding includes space between bars
const y = d3
  .scaleLinear() //vertical position
  .domain([0, d3.max(data)])
  .range([chartHeight, 0]);
g.selectAll('.bar')
  .data(data)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', (d, i) => x(i))
  .attr('y', (d) => y(d))
  .attr('width', x.bandwidth())
  .attr('height', (d) => chartHeight - y(d));
g.append('g') //x axis
  .attr('transform', `translate(0, ${chartHeight})`)
  .call(d3.axisBottom(x).tickFormat((i) => `Item ${i + 1}`));
g.append('g').call(d3.axisLeft(y)); //y-axis
