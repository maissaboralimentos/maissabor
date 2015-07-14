var markerImg = $('#map-canvas').attr('data-marker-img');
function initialize() {
  var stylez = [
    {
      featureType: "all",
      stylers: [
        { hue: "#0000ff" },
        { saturation: -75 }
      ]
    },
    {
      featureType: "poi",
      elementType: "label",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  var latlng = new google.maps.LatLng(-30.0912534, -51.2204192),

  mapOptions = {
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, "Edited"]
    },
    center: latlng,
    zoom: 12,
    scrollwheel: false,
    panControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true
  },

  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions),

  styledMapType = new google.maps.StyledMapType(stylez, {name: "Edited"}),

  marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title:"Aqui é a Mais Sabor Alimentos, aguardamos a sua visita. Av. Nonoai, 1087 - Nonoai, Porto Alegre - RS"
  }),

  infowindow = new google.maps.InfoWindow({
    content: "<div>Aqui é a Mais Sabor Alimentos, aguardamos a sua visita. <br> Av. Nonoai, 1087 - Nonoai, Porto Alegre - RS</div>"
  });

  map.mapTypes.set("Edited", styledMapType);
  map.setMapTypeId('Edited');

  function toggleBounce () {
    if (marker.getAnimation() != null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  // Add click listener to toggle bounce
  google.maps.event.addListener(marker, 'click', function () {
    toggleBounce();
    infowindow.open(map, marker);
    setTimeout(toggleBounce, 1500);
  });
}

// Call initialize -- in prod, add this to window.onload or some other DOM ready alternative
initialize();
