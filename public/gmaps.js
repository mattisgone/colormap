function initialize() {
  // Define basic map options
  var mapOptions = { center : new google.maps.LatLng(42.379851,-71.05957), zoom: 8, disableDefaultUI : true, mapTypeId: google.maps.MapTypeId.ROADMAP };

  // Create map from canvas
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  // Long list of complex styles
  var styles = [
    {
      featureType: 'water',
          elementType: 'all',
          stylers: [
            { hue: '#000000' },
            { saturation: -100 },
            { lightness: -100 },
            { visibility: 'on' }
          ]
    },
    {
      featureType: 'landscape',
      elementType: 'all',
      stylers: [
        { hue: '#5D5E5E' },
        { saturation: -98 },
        { lightness: -59 },
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'landscape.man_made',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: -100 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'landscape.natural',
      elementType: 'all',
      stylers: [
        { hue: '#5D5E5E' },
        { saturation: -96 },
        { lightness: -61 },
        { visibility: 'on' }
      ]
    },
    {
      featureType: 'road',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: -100 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'road.highway',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: -100 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'road.arterial',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: -100 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'road.local',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: -100 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: -100 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: -100 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'poi.business',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: -100 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'poi.attraction',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: -100 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'poi.medical',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: -100 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'poi.school',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: -100 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'poi.government',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: -100 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'poi.place_of_worship',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: -100 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'administrative',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: 0 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'administrative.country',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: 0 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'administrative.land_parcel',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: 0 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: 0 },
        { lightness: 0 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'administrative.neighborhood',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: 0 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'administrative.province',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: 0 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'all',
      stylers: [
        { hue: '#000000' },
        { saturation: 0 },
        { lightness: -100 },
        { visibility: 'off' }
      ]
    }
  ];

  map.setOptions({ styles : styles });
}
google.maps.event.addDomListener(window, 'load', initialize);
