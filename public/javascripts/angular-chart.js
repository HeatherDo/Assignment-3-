var app = angular.module('simple-chart', []);

google.load("visualization", "1", {packages:["corechart"]});

app.controller('MainController', ['$scope', '$http',  function($scope, $http) {
  $http.get('/IntoxicationDeaths').success(function(data){
    formatDataTable(data);
  });
}]);

function formatDataTable(chartdata) {
  var data = [];
  var header = ['Drug', 'Deaths'];
  
  data.push(header);
  data.push(['Heroin', chartdata[0].Heroin]);
  data.push(['Prescription_Opioid', chartdata[0].Prescription_Opioid]);
  data.push(['Alcohol', chartdata[0].Alcohol]);
  data.push(['Benzodiazepine', chartdata[0].Benzodiazepine]);
  data.push(['Cocaine', chartdata[0].Cocaine]);
  data.push(['Fentanyl', chartdata[0].Fentanyl]);

  var g_data = google.visualization.arrayToDataTable(data);
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(g_data, getOptions());
}

function getOptions()
{
     var options = {
        title: 'Drug Deaths in 2007',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Number of People who Actually Died :-(',
          minValue: 0
        },
        vAxis: {
          title: 'Type of Drug'
        }
      };

    return options;
}
