let map;
let markers;
let bounds;
const api_key = `AIzaSyCq-kZbqG2Ie-3uJIyYByeVJ5gYKcfpm-o`;

document.addEventListener("DOMContentLoaded", function() {
  if (document.querySelectorAll("#map").length > 0) {
    if (document.querySelector("html").lang)
      lang = document.querySelector("html").lang;
    else lang = "en";

    var js_file = document.createElement("script");
    js_file.type = "text/javascript";
    js_file.src = `https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&key=${api_key}&language=${lang}`;
    document.getElementsByTagName("head")[0].appendChild(js_file);
  }
});

/* function plotMarkers(m) {
  markers = [];
  bounds = new google.maps.LatLngBounds();

  
    let position = new google.maps.LatLng(m.lat, m.lng);

    markers.push(
      new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      })
    )
    

    bounds.extend(position)
  console.log(bounds);
    map.fitBounds(bounds);
  let markerslatlang = [{
        lat : 59.373626,
        lang : 17.837523
    }];
    plotMarkers(markerslatlang)
} */

function initMap() {
    
    let mapOptions =  {
        center: { lat: 59.373477, lng: 17.837691 },
        zoom: 4,
        disableDefaultUI: true,
        styles:[
          {
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#2f343b"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#703030"
                  }
              ]
          },
          {
              "featureType": "administrative",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#2f343b"
                  },
                  {
                      "weight": 1
                  }
              ]
          }
      ]
      
      };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions)
  let myLatLng = new google.maps.LatLng(59.373626, 17.837523);
  let marker = new google.maps.Marker({
      position: myLatLng,
      animation: google.maps.Animation.BOUNCE,
      title: "Me"
  });
  marker.setMap(map);
}
