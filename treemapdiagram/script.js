google.charts.load('current', { packages: ['treemap'] });
google.charts.setOnLoadCallback(drawTreemap);

function drawTreemap() {
  const data = google.visualization.arrayToDataTable([
    ['Category', 'Parent', 'Value'],
    ['Sales', null, 0],
    ['Electronics', 'Sales', 500],
    ['Mobile', 'Electronics', 300],
    ['Laptop', 'Electronics', 200],
    ['Clothing', 'Sales', 300],
    ['Men', 'Clothing', 180],
    ['Women', 'Clothing', 120],
  ]);

  const tree = new google.visualization.TreeMap(
    document.getElementById('treemap')
  );

  tree.draw(data, {
    minColor: '#c7d2fe',
    midColor: '#818cf8',
    maxColor: '#312e81',
    headerHeight: 15,
    fontColor: 'black',
    showScale: true,
  });
}
