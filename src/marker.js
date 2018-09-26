const mapboxgl = require("mapbox-gl");


module.exports = {
    activity: function(map){
        const activity = document.createElement("div")
        activity.setAttribute('id', 'marker')
        activity.style.width = "25px"
        activity.style.height = "30px"
        activity.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
        new mapboxgl.Marker(activity).setLngLat([-87.641, 41.895]).addTo(map)
    },

    hotel: function(map){
        const hotel = document.createElement("div")
        hotel.setAttribute('id', 'marker')
        hotel.style.width = "25px"
        hotel.style.height = "30px"
        hotel.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
        new mapboxgl.Marker(hotel).setLngLat([-79.009151, 45.705086]).addTo(map)
    },

    restaurant: function(map){
        const restaurant = document.createElement("div")
        restaurant.setAttribute('id', 'marker')
        restaurant.style.width = "25px"
        restaurant.style.height = "30px"
        restaurant.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)"
        new mapboxgl.Marker(restaurant).setLngLat([-74.009151, 50.705086]).addTo(map)
    }
}


