export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiYnJ5Y2VtY21hdGgiLCJhIjoiY2w0M2RtNjNmMDN0MzNpcGhidWV0MGdobiJ9.TZrRH-kvN7xqrO_QSdsnPw';

  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/brycemcmath/cl43doucu000214p6h5tp3vyg',
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend bounds to include current locations
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 150,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
