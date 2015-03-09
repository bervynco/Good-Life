var fundFactApp = angular.module('fundFactApp', []);
fundFactApp.factory('fundFactory', function() {
  return {
    getFundNames: function() {
      return  [	{"id":"1", 
      			"fundName":"Wealth Bond Fund", 
      			"group": "1",
      			"fundDescription":"Take full advantage of your earning potential and satisfy your needs for wealth building! The Philippine Wealth Bond Fund is a fixed income fund that invests in a diversified portfolio of interest bearing Philippine money market instruments and securities issued by the Philippine government."
      				},
			   	{"id":"2", 
			    "fundName":"Wealth Balanced Fund", 
			    "group": "1",
			   	"fundDescription":"The Philippine Wealth Balanced Fund gives you the opportunity to achieve long-term investment growth through both interest income and capital gains! The Fund focuses on bonds issued by the Philippine government and equities issued by top Philippine corporations listed in the Philippine Stock Exchange."
					},
				{"id":"3", 
				"fundName":"Wealth Equity Fund", 
				"group": "1",
				"fundDescription":"The Philippine Wealth Equity Fund gives you the best opportunity to accomplish medium to long-term investment growth through equities issued by top Philippine corporations listed in the Philippine Stock Exchange."
					},
				{"id":"4",
				 "fundName":"Liquidity Fund", 
				 "group": "1",
				 "fundDescription":"Philippine Liquidity Fund provides a safe haven for existing clients who wish to switch from their current funds during volatile market movements and switch back when there is less volatility in the market."
				 	},
				{"id":"5",
				 "fundName":"Opportunity Fund",
				  "group": "1",
				  "fundDescription":"The Opportunity Fund is designed to give your investments long-term growth through capital gains and dividends by investing in equities of Philippine corporations listed in the Philippine Stock Exchange index (PSEi) that will provide access to a diversified portfolio of equities from different industries."
					},
				{"id":"6",
				 "fundName":"Chinese Tycoon Fund",
				 "group": "1",
				 "fundDescription":"The portfolio will be mainly invested in blue-chip stocks of companies belonging to the Philippine Stock Exchange owned and/or controlled by Chinese-Filipino Tycoons/families. The Chinese, known for their impeccable business acumen, are also known for their ability to grow businesses which have shown or are showing sustained growth in size and market share and have become dominant players in their respective industries."
					},
				{"id":"7",
				 "fundName":"Spanish American Legacy Fund",
				  "group": "1",
				  "fundDescription":"The portfolio will be mainly invested in blue-chip stocks of companies with Spanish or American lineage belonging to the Philippine Stock Exchange. Majority of these companies are characterized with long corporate history, significant market dominance in their respective industries and have made utilities, telecoms, broadcast media, shipping, beverage and food industries into massive sources of wealth."
					},
				{"id":"8",
				 "fundName":"Peso Phoenix 5 Fund",
				 "group": "1",
				 "fundDescription":"The Peso Phoenix 5 Fund is invested in a structured note issued by a foreign investment grade bank. The investment is 80% capital protected if held until maturity and subject to the foreign bank’s creditworthiness. It matures in 5 years."
					},
				{"id":"9",
				 "fundName":"Peso Phoenix 7 Fund",
				 "group": "1",
				 "fundDescription":"The Peso Phoenix 7 Fund is invested in a structured note issued by a foreign investment grade bank. The investment is 80% capital protected if held until maturity and subject to the foreign bank’s creditworthiness. It matures in 7 years."
					},
				{"id":"10",
				 "fundName":"Premium Bond Fund",
				 "group": "2",
				 "fundDescription":"Boost your earnings through the Philippine Premium Bond Fund! Earn moderate investment returns through income yields of US Dollar-denominated fixed-income securities issued by the Philippine government and top corporations. The Fund is suitable for investors who prefer to maintain moderate liquidity."
					},
				{"id":"11",
				 "fundName":"Capital Investment Fund",
				 "group": "2",
				 "fundDescription":"Earn investments returns that are consistent with high liquidity and capital preservation. The fund is invested in US-Dollar denominated money market instruments and short to medium-term securities issued by the Philippine government."
					},
				{"id":"12",
				 "fundName":"Global Advantage Fund",
				 "group": "2",
				 "fundDescription": "This US dollar-denominated equity fund allows you to invest in the NASDAQ 100 index, which comprises 100 of the largest non-financial companies listed in the NASDAQ."
					},
				{"id":"13",
				 "fundName":"European Wealth Fund",
				 "group": "2",
				 "fundDescription": "This US dollar-denominated index-tracking equity fund allows you to invest in a major index that tracks the Eurozone, which provides a blue-chip representation of leaders in countries such as France, Germany, Italy and the Netherlands."
					},
				{"id":"14",
				 "fundName":"Asia Growth Fund",
				 "group": "2",
				 "fundDescription":"This US dollar-denominated index-tracking equity fund allows you to invest in securities included in a major Asian index, which consists of the following 10 developed and emerging market country indexes: China, Hong Kong, India, Indonesia, Korea, Malaysia, Philippines, Singapore, Taiwan, and Thailand."
					},
				{"id":"15",
				 "fundName":"Dollar Phoenix 5 Fund",
				 "group": "2",
				 "fundDescription":"The Dollar Phoenix 5 Fund is invested in a structured note issued by a foreign investment grade bank. The investment is 80% capital protected if held until maturity and subject to the foreign bank’s creditworthiness. It matures in 5 years."
					},
				{"id":"16",
				 "fundName":"Dollar Phoenix 7 Fund",
				 "group": "2",
				 "fundDescription":"The Dollar Phoenix 7 Fund is invested in a structured note issued by a foreign investment grade bank. The investment is 80% capital protected if held until maturity and subject to the foreign bank’s creditworthiness. It matures in 7 years."
					},
				{"id":"17",
				 "fundName":"3G-Xceed Dollar B19 Fund",
				 "group": "3",
				 "fundDescription":"This US dollar-denominated bond fund gives your investment both capital protection and different levels of guaranteed returns upon fund maturity on June 2019 by investing in USD-denominated bonds issued by the Philippine government."
					},
				{"id":"18",
				 "fundName":"3G-Xceed Dollar B20 Fund",
				 "group": "3",
				 "fundDescription":"This US dollar-denominated bond fund gives your investment both capital protection and different levels of guaranteed returns upon fund maturity on January 2020 by investing in USD-denominated bonds issued by the Philippine government."
					},
				{"id":"19",
				 "fundName":"3G-Xceed Dollar B21 Fund",
				 "group": "3",
				 "fundDescription":"This US dollar-denominated bond fund gives your investment both capital protection and different levels of guaranteed returns upon fund maturity on January 2021 by investing in USD-denominated bonds issued by the Philippine government."
					},
				{"id":"20",
				 "fundName":"3G-Xceed B16 Fund",
				 "group":"4",
				 "fundDescription":"This bond fund gives your investment both capital protection and different levels of guaranteed returns upon fund maturity on January 2016 by investing in sovereign bonds of the Philippine government."
					},
				{"id":"21",
				 "fundName":"3G-Xceed B16 Fund Series 2",
				 "group":"4",
				 "fundDescription":"This bond fund gives your investment both capital protection and different levels of guaranteed returns upon fund maturity on September 2016 by investing in sovereign bonds of the Philippine government."
					},
				{"id":"22",
				 "fundName":"3G-Xceed B17 Fund",
				 "group":"4",
				 "fundDescription":"This bond fund gives your investment both capital protection and different levels of guaranteed returns upon fund maturity on March 2017 by investing in sovereign bonds of the Philippine government."
					},
				{"id":"23",
				 "fundName":"3G-Xceed B17 Fund Series 2",
				 "group":"4",
				 "fundDescription":"This bond fund gives your investment both capital protection and different levels of guaranteed returns upon fund maturity on October 2017 by investing in sovereign bonds of the Philippine government."
					},
				{"id":"24",
				 "fundName":"3G-Xceed B18 Fund",
				 "group":"4",
				 "fundDescription":"This bond fund gives your investment both capital protection and different levels of guaranteed returns upon fund maturity on January 2018 by investing in sovereign bonds of the Philippine government."
					},
				{"id":"25",
				 "fundName":"3G-Xceed B18 Fund Series 2",
				 "group":"4",
				 "fundDescription":"This bond fund gives your investment both capital protection and different levels of guaranteed returns upon fund maturity on August 2018 by investing in sovereign bonds of the Philippine government."
					},
				{"id":"26",
				 "fundName":"3G-Xceed B19 Fund",
				 "group":"4",
				 "fundDescription":"This bond fund gives your investment both capital protection and different levels of guaranteed returns upon fund maturity on February 2019 by investing in sovereign bonds of the Philippine government."
					},
				{"id":"27",
				 "fundName":"3G-Xceed B20 Fund",
				 "group":"4",
				 "fundDescription":"This bond fund gives your investment both capital protection and different levels of guaranteed returns upon fund maturity on December 2020 by investing in sovereign bonds of the Philippine government."
					},
				{"id":"28",
				 "fundName":"3G-Xceed B21 Fund",
				 "group":"4",
				 "fundDescription":"This bond fund gives your investment both capital protection and different levels of guaranteed returns upon fund maturity on March 2021 by investing in sovereign bonds of the Philippine government."
					},
		
		
		];
    },
  };
});
fundFactApp.controller('FundFactController', function($scope, fundFactory, $filter) {
  	$scope.funds = fundFactory.getFundNames();

  	$scope.getDescription=function(fundId){
  		
    	//$scope.postDescription(fundFactory.getFundNames()[fundId].fundDescription);
    	//console.log(fundFactory.getFundNames()[fundId].fundDescription);
    	$scope.fundDescriptionModel = fundFactory.getFundNames()[fundId].fundDescription;

    	
}
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

//14.600211, 120.974237
angular.module('ContactApp', ['uiGmapgoogle-maps'])
  .controller('MapCtrl', function ($scope, $log) {

    $scope.map = {center: {latitude: 14.600211, longitude: 120.974237 }, zoom: 18 };
    $scope.options = {scrollwheel: false};
    $scope.markers = [{
      id: 0,
      coords: {
        latitude: 14.600211,
        longitude: 120.974237
      },
      options: { draggable: true },
    }];
      console.log($scope.markers);
  });