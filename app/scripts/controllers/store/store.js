app.controller('mainStoreCtrl', ['$scope',
	function($scope) {
		$scope.message = 'Store Controller';
		$scope.shirtData = window.shirtData;
	}
]);