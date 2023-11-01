/* NOTE: this may take about a minute to run */
// retrieve 8-band images captured using the Landsat satellite
var landsat = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA');

// take the median of image values over the 2016 year
var median = landsat.filterDate('2016-01-01', '2016-12-31').median();

// display the composite image, using bands B4 (red),
// B3 (green), and B2 (blue) in the red, green, and blue channels, 
// respectively --- a natural-color RGB image
Map.addLayer(median, {bands: ['B4', 'B3', 'B2'], max: 0.3});
