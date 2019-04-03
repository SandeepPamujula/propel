
var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:4000/api/v1.0/airports";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
    console.log(myArr);
    getAirports(myArr);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
function searchFlights() {

    var origin = document.getElementById("airports").value;
    var des = document.getElementById("airportsDes").value;
    var url = "http://localhost:4000/api/v1.0/flights";
    console.log(origin, des);

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myArr = JSON.parse(this.responseText);
          console.log(myArr);
        //   getAirports(myArr);
        displayFlights(myArr);
        }
      };
      xmlhttp.open("GET", url, true);
      xmlhttp.setRequestHeader("originId", origin);
      xmlhttp.setRequestHeader("destinationId", des);
      xmlhttp.setRequestHeader("travelDate", '2019-03-01');

      xmlhttp.send();
    

}
function displayFlights(arr) {
  var sel = document.getElementById('availableFlights');
    var str ='';
    for (i=0; i< arr.length; i++) {
        str += '<li>'+ arr[i].flightcode+'</li>';
        sel.innerHTML = str;

    }
}

function getAirports(arr) {
  var out = "";
  var i;
  console.log(arr);
  console.log(arr[0].city);
  var city = [];
  var sel = document.getElementById('airports');
  var des = document.getElementById('airportsDes');


  for(i = 0; i < arr.length; i++) {
    
    var opt = document.createElement('option');
    opt.innerHTML = arr[i].city;
    opt.value = arr[i].id;
    sel.appendChild(opt);

    var desOpt = document.createElement('option');
    desOpt.innerHTML = arr[i].city;
    desOpt.value = arr[i].id;
    des.appendChild(desOpt);
  }
}