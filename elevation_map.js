/* PART 1 */

// instantiate an image (here, a global elevation map)
var image = ee.Image('CGIAR/SRTM90_V4');
// add the image to the Earth Engine Map below,
Map.addLayer(image);


/* PART 2 */

// instantiate an image (here, a global elevation map)
var image = ee.Image('CGIAR/SRTM90_V4');
// center the map at the Grand Canyon and zoom in
Map.setCenter(-112.8598, 36.2841, 9); 
// add the image to the Map below; the grayscale 
// range is set to [0,3000], meaning the pixels go from 
// white to black from elevation values 0 to 3000, respectively.
Map.addLayer(image, {min: 0, max: 3000}); 


/* PART 3 */

// instantiate an image (here, a global elevation map)
var image = ee.Image('CGIAR/SRTM90_V4');

// center the map at the Grand Canyon and zoom in
Map.setCenter(-112.8598, 36.2841, 9); 

// add the image to the Map below, and use a color palette
// going from blue to white to green in the elevation range [0,3000]
Map.addLayer(image, {min: 0, max: 3000, 
          palette: ["blue","white","green"]});
