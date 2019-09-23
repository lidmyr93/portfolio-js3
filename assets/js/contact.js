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
        styles: [
          {
            featureType: "all",
            elementType: "all",
            stylers: [
              {
                color: "#ff7000"
              },
              {
                lightness: "69"
              },
              {
                saturation: "100"
              },
              {
                weight: "1.17"
              },
              {
                gamma: "2.04"
              }
            ]
          },
          {
            featureType: "all",
            elementType: "geometry",
            stylers: [
              {
                color: "#cb8536"
              }
            ]
          },
          {
            featureType: "all",
            elementType: "labels",
            stylers: [
              {
                color: "#ffb471"
              },
              {
                lightness: "66"
              },
              {
                saturation: "100"
              }
            ]
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: [
              {
                gamma: 0.01
              },
              {
                lightness: 20
              }
            ]
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: [
              {
                saturation: -31
              },
              {
                lightness: -33
              },
              {
                weight: 2
              },
              {
                gamma: 0.8
              }
            ]
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "all",
            stylers: [
              {
                lightness: "-8"
              },
              {
                gamma: "0.98"
              },
              {
                weight: "2.45"
              },
              {
                saturation: "26"
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
              {
                lightness: 30
              },
              {
                saturation: 30
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                saturation: 20
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                lightness: 20
              },
              {
                saturation: -20
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                lightness: 10
              },
              {
                saturation: -30
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
              {
                saturation: 25
              },
              {
                lightness: 25
              }
            ]
          },
          {
            featureType: "water",
            elementType: "all",
            stylers: [
              {
                lightness: -20
              },
              {
                color: "#ecc080"
              }
            ]
          }
        ]
      };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions)
  /* let myLatLng = {lat : 59.373626, lang : 17.837523} */
  let myLatLng = new google.maps.LatLng(59.373626, 17.837523);
  let marker = new google.maps.Marker({
      position: myLatLng,
      animation: google.maps.Animation.BOUNCE,
      title: "Me"
  });
  marker.setMap(map);
}
