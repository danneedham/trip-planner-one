const mapboxgl = require("mapbox-gl");
const markerFuns = require('./marker.js')

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFubmVlZGhhbSIsImEiOiJjam1pNmp2aDgwMXJuM3Frd3o5aWh4YTQ1In0.WNpC-pQ8jTtLZuzZ47gmgw';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705],
    zoom: 12,
    style: "mapbox://styles/mapbox/streets-v10" 
});

const marker = document.createElement('div')
// marker.setAttribute('id','marker')
marker.style.width = "32px"
marker.style.height = "39px"
marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
new mapboxgl.Marker(marker).setLngLat([-74.009151, 40.705086]).addTo(map)


console.log(markerFuns)


markerFuns.hotel(map)
markerFuns.activity(map)
markerFuns.restaurant(map)