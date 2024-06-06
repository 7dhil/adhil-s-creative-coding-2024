let brandData;
let Sales;
let colors = [];

function preload() {
  brandData = loadTable('phone_sales.csv', 'csv', 'header');
}

function setup() {
  createCanvas(800, 500);
  background(255);

  let startX = 50;
  let startY = 50;
  let barWidth = 30;
  Sales = getMaxSales();

  // Draw bars for each phone brand
  for (let i = 0; i < brandData.getRowCount(); i++) {
    let brand = brandData.getString(i, 'Brand');
    let sales = parseFloat(brandData.getString(i, 'Sales'));

    let x = startX + i * 100;
    let barHeight = map(sales, 0, Sales, 0, 300);
    let y = startY + (300 - barHeight);
    let barColor = color(random(255), random(255), random(255));

    colors.push(barColor); // Store colors for legend

    fill(barColor);
    rect(x, y, barWidth, barHeight);

    fill(0);
    textAlign(CENTER);
    text(brand, x + barWidth / 2, startY + 320);

    // Display numbers on the bars
    textSize(12);
    text(sales, x + barWidth / 2, y - 5);
  }

  // Title
  textSize(20);
  textAlign(CENTER);
  text("Phone Brands Sales", width / 2, 30);

  // Display legend box
  displayLegendBox();
}

function displayLegendBox() {
  let boxWidth = 200;
  let boxHeight = 150;
  let margin = 20;
  let x = width - boxWidth - margin;
  let y = margin;

  fill(255);
  rect(x, y, boxWidth, boxHeight);
  fill(0);
  textAlign(LEFT);
  textSize(14);
  text("Sales Data", x + 10, y + 20);

  for (let i = 0; i < brandData.getRowCount(); i++) {
    let brand = brandData.getString(i, 'Brand');
    let sales = parseFloat(brandData.getString(i, 'Sales'));
    let barColor = colors[i];

    fill(barColor);
    rect(x + 10, y + 40 + i * 20 - 10, 20, 20);

    fill(0);
    text(`${brand}: ${sales}`, x + 35, y + 40 + i * 20);
  }
}

function getMaxSales() {
  let maxSales = 0;
  for (let i = 0; i < brandData.getRowCount(); i++) {
    let sales = parseFloat(brandData.getString(i, 'Sales'));
    if (sales > maxSales) {
      maxSales = sales;
    }
  }
  return maxSales;
}
