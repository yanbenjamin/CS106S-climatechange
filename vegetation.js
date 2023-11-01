/* PART 1 (NOTE: this may take about a minute to run) */
// retrieve 8-band images captured using the Landsat satellite
var landsat = ee.ImageCollection('LANDSAT/LC08/C02/T1_TOA');

// take the median of image values over the 2016 year
var aggregate = landsat.filterDate('2016-01-01', '2016-12-31').median();

// calculate the NDVI vegetation index: (NIR - R) / (NIR + R)
var vegetation = aggregate.expression(
  '(NIR - R) / (NIR + R)', 
  {"NIR": aggregate.select('B5'), "R": aggregate.select("B4")})

Map.addLayer(vegetation, {min: -1, max: 1, 
    palette: ['red', 'yellow', 'green']});

/* PART 2 (tracking vegetation changes over time)*/

// load an already created Landsat composite of the year 1999
var landsat_1999 = ee.Image('LANDSAT/LE7_TOA_1YEAR/1999');

// load an already created Landsat composite of the year 2008
var landsat_2008 = ee.Image('LANDSAT/LE7_TOA_1YEAR/2008');

// get the NDVI (vegetation index) of each 
function get_vegetation(image){
  return image.expression('(NIR - R) / (NIR + R)', 
  {"NIR": image.select('B5'), "R": image.select("B4")});
}
var vegetation_1999 = get_vegetation(landsat_1999);
var vegetation_2008 = get_vegetation(landsat_2008);

// get the difference in vegetation and Map it
var vegetation_diff = vegetation_2008.subtract(vegetation_1999);
Map.addLayer(vegetation_diff, {min: -1, max: 1, 
    palette: ['darkred', 'white', 'darkgreen']});
