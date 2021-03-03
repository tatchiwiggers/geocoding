import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

const initMapbox = () => {
  const mapElement = document.getElementById('map');

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/tatchiwiggers/cker4dw5r1pr619nvx1lsynrq'
    });

    map.addControl(new MapboxGeocoder({ accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl }));

    const markers = JSON.parse(mapElement.dataset.markers);
    markers.forEach((marker) => {
      const popup = new mapboxgl.Popup().setHTML(marker.infoWindow);

      // Creates an HTML element for your custom marker
      const element = document.createElement('div');
      element.className = 'marker';
      element.style.backgroundImage = `url('${marker.image_url}')`;
      element.style.backgroundSize = 'contain';
      element.style.width = '25px';
      element.style.height = '25px';

      // Pass the element as an argument to the new marker
      new mapboxgl.Marker()
        .setLngLat([ marker.lng, marker.lat ])
        .setPopup(popup)
        .addTo(map);
    });

    const bounds = new mapboxgl.LngLatBounds();
    // stretches the bound to max longitude and latitude of markers
    markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
    // tells the map to respect the bounds!
    map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });

  }
};

export { initMapbox };


// const fitMapToMarkers = (map, markers) => {
//   const bounds = new mapboxgl.LngLatBounds();
//   markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
//   map.fitBounds(bounds, { padding: 70, maxZoom: 15, duration: 0 });
// };

// if (mapElement) {
//   // [ ... ]
//   fitMapToMarkers(map, markers);
// }