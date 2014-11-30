var fundFactApp = angular.module('fundFactApp', []);

fundFactApp.controller('FundFactCtrl', function ($scope) {
  $scope.funds = [
		{id:1, fundName:'Wealth Bond Fund', group: 1},
		{id:2, fundName:'Wealth Balanced Fund', group: 1},
		{id:3, fundName:'Wealth Equity Fund', group: 1},
		{id:4, fundName:'Liquidity Fund', group: 1},
		{id:5, fundName:'Opportunity Fund', group: 1},
		{id:6, fundName:'Chinese Tycoon Fund', group: 1},
		{id:7, fundName:'Spanish American Legacy Fund', group: 1},
		{id:8, fundName:'Premium Bond Fund', group: 2},
		{id:9, fundName:'Capital Investment Fund',group: 2},
		{id:10, fundName:'Global Advantage Fund',group: 2},
		{id:11, fundName:'European Wealth Fund',group: 2},
		{id:12, fundName:'Asia Growth Fund',group: 2},
		{id:13, fundName:'3G-Xceed Dollar B19 Fund',group: 3},
		{id:14, fundName:'3G-Xceed Dollar B20 Fund',group: 3},
		{id:15, fundName:'3G-Xceed Dollar B21 Fund',group: 3},
		{id:16, fundName:'3G-Xceed B16 Fund', group:4},
		{id:17, fundName:'3G-Xceed B16 Fund Series 2', group:4},
		{id:18, fundName:'3G-Xceed B17 Fund', group:4},
		{id:19, fundName:'3G-Xceed B17 Fund Series 2', group:4},
		{id:20, fundName:'3G-Xceed B18 Fund', group:4},
		{id:21, fundName:'3G-Xceed B18 Fund Series 2', group:4},
		{id:22, fundName:'3G-Xceed B19 Fund', group:4},
		{id:23, fundName:'3G-Xceed B20 Fund', group:4},
		{id:24, fundName:'3G-Xceed B21 Fund', group:4},
		{id:21, fundName:'Dollar Phoenix 5 Fund',group: 2},
		{id:22, fundName:'Dollar Phoenix 7 Fund',group: 2},
		{id:23, fundName:'Peso Phoenix 5 Fund', group: 1},
		{id:24, fundName:'Peso Phoenix 7 Fund', group: 1}
];
});

$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
}); // end ready