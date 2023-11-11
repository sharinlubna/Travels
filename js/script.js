function nav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function myMap() {
  var mapProp= {
  center:new google.maps.LatLng(42.35227656158645, -71.06710989760907),
  zoom:18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }



