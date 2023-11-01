/* PART 1 (visualizing forest cover in the year 2000) */

// load a forest cover image tracking changes from 2000 to 2015
var forestcover = ee.Image("UMD/hansen/global_forest_change_2015");

// plot the tree cover in the year 2000 (light green for high forestation)
Map.addLayer(forestcover, {"bands": ["treecover2000"], 
  "palette": ["black","lightgreen"]}, "treecover2000");
  
// print out dataset info to the console (very useful!)
print(forestcover); // you can check out the band names by doing this

/* PART 2 (building a global composite image of deforestation) */

// load a forest cover image tracking changes from 2000 to 2015
var forestcover = ee.Image("UMD/hansen/global_forest_change_2015");

// create a false-color image where the red channel is a binary forest loss 
// mask (i.e. a pixel is 1 if forest loss occurred, and 0 otherwise), the
// green is the 2000 forest cover, and blue is a binary forest gain mask
Map.addLayer(forestcover, {
  "bands": ["loss", "treecover2000", "gain"], // correspond to R,G,B
  "max": [1, 255, 1]}, "forest_composite");
  
// print out dataset info to the console (very useful!)
print(forestcover);
