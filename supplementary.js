/* MODIS Data */

// load in the MODIS image mosaic and take the average values over the 2021 year
var temp = ee.ImageCollection("MODIS/061/MCD43A4");
var temp = temp.filterDate('2021-01-01', '2021-12-31').median();

// R, G, B correspond to Bands 1, 4, and 3, respectively for MODIS
Map.addLayer(temp, {"bands": ["Nadir_Reflectance_Band1",
      "Nadir_Reflectance_Band4", "Nadir_Reflectance_Band3",
      ], min: 0, max: 3000});

/* Precipitation Data */

// load in the precipitation data 
var rain_data = ee.ImageCollection('OREGONSTATE/PRISM/Norm91m');
var precipitation = rain_data.select('ppt');

// color ramp the map values from red to yellow to green to cyan
// to purple in the range [0,300]
// note: using addLayer on an Image Collection (instead
// of an image) auto-produces a mosaic using priority ordering of images
Map.addLayer(precipitation, {min: 0, max: 300,
  palette: ['red', 'yellow', 'green', 'cyan', 'purple']});

print(precipitation)
