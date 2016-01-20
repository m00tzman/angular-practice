angular.module("todoListApp", [])
.controller('mainCntrl', function($scope) {
	$scope.helloWorld = function() {
		console.log("Hello there! This is the helloWorld controll function, in the mainCntrl!");
	};
})

.controller('coolCtrl', function($scope){
	$scope.whoAmI = function() {
		console.log("hello there, this is the coolCtrl function!");
	};;
});;