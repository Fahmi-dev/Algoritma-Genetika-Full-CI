// Flex Admin Demo Chart JavaScript

//Morris Area Chart
var sales_data = [
{date: '2014-1-25', productA: 80.26, productB: 78.26, productC: 79.91, productD: 81.63},
{date: '2014-1-26', productA: 48.34, productB: 50.62, productC: 51.34, productD: 49.35},
{date: '2014-1-27', productA: 64.91, productB: 65.26, productC: 63.48, productD: 68.61},
{date: '2014-1-28', productA: 91.23, productB: 87.94, productC: 95.79, productD: 90.24},
{date: '2014-1-29', productA: 148.26, productB: 151.98, productC: 164.33, productD: 142.43},
{date: '2014-1-30', productA: 74.53, productB: 71.26, productC: 78.91, productD: 76.32},
{date: '2014-1-31', productA: 84.26, productB: 62.87, productC: 63.72, productD: 58.06},
];
Morris.Area({
element: 'morris-chart-area',
data: sales_data,
xkey: 'date',
xLabelFormat: function(date) {
	return (date.getMonth()+1)+'/'+date.getDate()+'/'+date.getFullYear(); 
},
xLabels: 'day',
ykeys: ['productA', 'productB', 'productC', 'productD'],
yLabelFormat: function (y) { return "$" + y ;},
labels: ['Product A', 'Product B', 'Product C', 'Product D'],
lineColors: ['#e74c3c','#f39c12', '#2980b9', '#16a085'],
hideHover: 'auto',
resize: true,
gridTextFamily: ['Open Sans'],
dateFormat: function(date) {
	d = new Date(date);
	return (d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear(); 
	},
});


//Morris Donut Chart
Morris.Donut({
element: 'morris-chart-donut',
data: [
 {label: "Referrals", value: 42.7},
 {label: "Direct", value: 8.3},
 {label: "Social", value: 12.8},
 {label: "Organic", value: 36.2}
],
resize: true,
colors: ['#16a085','#2980b9', '#f39c12', '#e74c3c'],
formatter: function (y) { return y + "%" ;}
});


//Morris Line Chart
Morris.Line({
// ID of the element in which to draw the chart.
element: 'morris-chart-line',
// Chart data records -- each entry in this array corresponds to a point on
// the chart.
data: [
  { d: '2012-10-01', visits: 802, },
  { d: '2012-10-02', visits: 783,  },
  { d: '2012-10-03', visits:  820, },
  { d: '2012-10-04', visits: 839,  },
  { d: '2012-10-05', visits: 792,  },
  { d: '2012-10-06', visits: 859,  },
  { d: '2012-10-07', visits: 790,  },
  { d: '2012-10-08', visits: 1680, },
  { d: '2012-10-09', visits: 1592, },
  { d: '2012-10-10', visits: 1420, },
  { d: '2012-10-11', visits: 882,  },
  { d: '2012-10-12', visits: 889,  },
  { d: '2012-10-13', visits: 819,  },
  { d: '2012-10-14', visits: 849,  },
  { d: '2012-10-15', visits: 870,  },
  { d: '2012-10-16', visits: 1063, },
  { d: '2012-10-17', visits: 1192, },
  { d: '2012-10-18', visits: 1224, },
  { d: '2012-10-19', visits: 1329, },
  { d: '2012-10-20', visits: 1329, },
  { d: '2012-10-21', visits: 1239, },
  { d: '2012-10-22', visits: 1190, },
  { d: '2012-10-23', visits: 1312, },
  { d: '2012-10-24', visits: 1293, },
  { d: '2012-10-25', visits: 1283, },
  { d: '2012-10-26', visits: 1248, },
  { d: '2012-10-27', visits: 1323, },
  { d: '2012-10-28', visits: 1390, },
  { d: '2012-10-29', visits: 1420, },
  { d: '2012-10-30', visits: 1529,  },
  { d: '2012-10-31', visits: 1892,  },
],
// The name of the data record attribute that contains x-visitss.
xkey: 'd',
// A list of names of data record attributes that contain y-visitss.
ykeys: ['visits'],
// Labels for the ykeys -- will be displayed when you hover over the
// chart.
lineColors: ['#16a085'],
labels: ['Visits'],
// Disables line smoothing
smooth: false,
resize: true
});


//Morris Bar Chart
Morris.Bar({
element: 'morris-chart-bar',
data: [
  { y: '2006', a: 100, b: 90 },
  { y: '2007', a: 75,  b: 65 },
  { y: '2008', a: 50,  b: 40 },
  { y: '2009', a: 75,  b: 65 },
  { y: '2010', a: 50,  b: 40 },
  { y: '2011', a: 75,  b: 65 },
  { y: '2012', a: 100, b: 90 }
],
xkey: 'y',
ykeys: ['a', 'b'],
labels: ['Series A', 'Series B'],
barColors: ['#8e44ad','#e74c3c'],
resize: true
});