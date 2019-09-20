---
title: Contact
---

<div class="flex-direction-row">
<div class="form-container">
  <h1>Contact me directly</h1>
<form action="#">
		<label for="name">
			<i class="contact-icon fa fa-user"></i>
			<input name="name" class="form-fields" type="text">
		</label>
		<label for="email">
			<i class="contact-icon fa fa-envelope"></i>
			<input name="email" class="form-fields" type="text">
		</label>
		<label for="contact">
			<i class="contact-icon fa fa-phone"></i>
			<input name="contact" class="form-fields" type="text">
		</label>
		<label for="textarea">
			<i class="contact-icon fa fa-comment"></i>
			<textarea class="form-fields" name="textarea" id=""></textarea>
		</label>
		<button class="form-fields-button" value="Send" type="submit">Send<i class="fa fa-paper-plane"></i></button>
	</form>
</div>

<div id="map"></div>
</div>

<script>
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
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
    });
  }</script>

