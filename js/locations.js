$(function () {

    function initMap() {

        var location = new google.maps.LatLng(37.708749, '-122.293119');

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false,
            center: location,
            zoom: 10,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'img/marker.png';

        var location1 = new google.maps.LatLng(37.785190, '-122.424237');
        var marker = new google.maps.Marker({
            position: location1,
            map: map,
            icon: markerImage
        });

        var location2 = new google.maps.LatLng(37.809775, '-122.274229');
        var marker = new google.maps.Marker({
            position: location2,
            map: map,
            icon: markerImage
        });

        var location3 = new google.maps.LatLng(37.549465, '-121.990880');
        var marker = new google.maps.Marker({
            position: location3,
            map: map,
            icon: markerImage
        });

        var location4 = new google.maps.LatLng(37.448967, '-122.143111');
        var marker = new google.maps.Marker({
            position: location4,
            map: map,
            icon: markerImage
        });

        var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];
        map.set('styles', styles);
    }
    
    google.maps.event.addDomListener(window, 'load', initMap);
});