$(document).ready(function() {

$.ajax({
method:"GET",
url: "https://data.cityofchicago.org/resource/tt4n-kn4t.json",
datatype: "json",
success: function(data) {

  for (var i = 0; i < 100; i++) {
    $("table").append("<tr><td>" + data[i].name + "</td><td>" + data[i].job_titles + "</td><td>" + data[i].department + "</td><td>" +"$"+ data[i].employee_annual_salary + "</td><tr>");
      }
    }
  });
});
