var fundFactApp = angular.module('fundFactApp', []);
var contactApp = angular.module('ContactApp', []);
fundFactApp.factory('fundFactory', function() {
  return {
    getFundNames: function() {
      return  [{"id":"1", "fundName":"Wealth Bond Fund", "group": "1"},
		{"id":"2", "fundName":"Wealth Balanced Fund", "group": "1"},
		{"id":"3", "fundName":"Wealth Equity Fund", "group": "1"},
		{"id":"4", "fundName":"Liquidity Fund", "group": "1"},
		{"id":"5", "fundName":"Opportunity Fund", "group": "1"},
		{"id":"6", "fundName":"Chinese Tycoon Fund", "group": "1"},
		{"id":"7", "fundName":"Spanish American Legacy Fund", "group": "1"},
		{"id":"8", "fundName":"Premium Bond Fund", "group": "2"},
		{"id":"9", "fundName":"Capital Investment Fund","group": "2"},
		{"id":"10", "fundName":"Global Advantage Fund","group": "2"},
		{"id":"11", "fundName":"European Wealth Fund","group": "2"},
		{"id":"12", "fundName":"Asia Growth Fund","group": "2"},
		{"id":"13", "fundName":"3G-Xceed Dollar B19 Fund","group": "3"},
		{"id":"14", "fundName":"3G-Xceed Dollar B20 Fund","group": "3"},
		{"id":"15", "fundName":"3G-Xceed Dollar B21 Fund","group": "3"},
		{"id":"16", "fundName":"3G-Xceed B16 Fund", "group":"4"},
		{"id":"17", "fundName":"3G-Xceed B16 Fund Series 2", "group":"4"},
		{"id":"18", "fundName":"3G-Xceed B17 Fund", "group":"4"},
		{"id":"19", "fundName":"3G-Xceed B17 Fund Series 2", "group":"4"},
		{"id":"20", "fundName":"3G-Xceed B18 Fund", "group":"4"},
		{"id":"21", "fundName":"3G-Xceed B18 Fund Series 2", "group":"4"},
		{"id":"22", "fundName":"3G-Xceed B19 Fund", "group":"4"},
		{"id":"23", "fundName":"3G-Xceed B20 Fund", "group":"4"},
		{"id":"24", "fundName":"3G-Xceed B21 Fund", "group":"4"},
		{"id":"21", "fundName":"Dollar Phoenix 5 Fund","group": "2"},
		{"id":"22", "fundName":"Dollar Phoenix 7 Fund","group": "2"},
		{"id":"23", "fundName":"Peso Phoenix 5 Fund", "group": "1"},
		{"id":"24", "fundName":"Peso Phoenix 7 Fund", "group": "1"}
		];
    },
  };
});
fundFactApp.controller('FundFactController', function($scope, fundFactory) {
  $scope.funds = fundFactory.getFundNames();
});


$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(2000);
        },
        function(){
            $(this).children('.sub-menu').slideUp(2000);
        }
    );
}); // end ready

//Angular App Module and Controller

14.600211, 120.974237
contactApp.controller('MapController', function ($scope) {
var link = function(scope, element, attrs) {
        var map, infoWindow;
        var markers = [];
        
        // map config
        var mapOptions = {
            center: new google.maps.LatLng(50, 2),
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };
        
        // init the map
        function initMap() {
            if (map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);
            }
        }    
        
        // place a marker
        function setMarker(map, position, title, content) {
            var marker;
            var markerOptions = {
                position: position,
                map: map,
                title: title,
                icon: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png'
            };

            marker = new google.maps.Marker(markerOptions);
            markers.push(marker); // add marker to array
        }
        
        // show the map and place some markers
        initMap();
        
        setMarker(map, new google.maps.LatLng(51.508515, -0.125487), 'London', 'Just some content');
        setMarker(map, new google.maps.LatLng(52.370216, 4.895168), 'Amsterdam', 'More content');
        setMarker(map, new google.maps.LatLng(48.856614, 2.352222), 'Paris', 'Text here');
    };
    
    return {
        restrict: 'A',
        template: '<div id="map"></div>',
        replace: true,
        link: link
    };
});