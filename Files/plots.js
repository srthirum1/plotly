//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//var trace = {
// x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
// y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
// type: "bar"
//};
//var data = [trace];
//var layout = {
// title: "'Bar' Chart",
 //xaxis: { title: "Drinks"},
//yaxis: { title: "% of Drinks Ordered"}
//};
//Plotly.newPlot("plotArea", data, layout);
d3.json("samples.json").then(function(data){
    console.log(data);
});


function optionChanged(newSample) {
    console.log(newSample);
}

  function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();


  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text(result.location);
    });
  }