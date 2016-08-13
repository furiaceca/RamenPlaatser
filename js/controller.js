/**
 * 
 */
var ramenPlaatserApp = angular.module('RamenPlaatser', []);
ramenPlaatserApp.controller('appController', function($scope) {
    $scope.pagesList = [
      {
          pageName: "pages/home.html"
      },
      {
    	  pageName: "pages/about.html"
      },
      {
    	  pageName: "pages/pictures.html"
      },
      {
    	  pageName: "pages/contact.html"
      }
    ];
    $scope.changeLink = function(id) {
    	console.log(id);
    }
});
ramenPlaatserApp.controller('menuController', function($scope){
	$scope.menuList = [ 
	{
		menuName : "Home"
	}, 
	{
		menuName : "About"
	}, 
	{
		menuName : "Services"
	}, 
	{
		menuName : "Pictures"
	}, 
	{
		menuName : "Contact"
	} 
	];
	$scope.gotoPage = function (page){
		console.log(page);
	}
});