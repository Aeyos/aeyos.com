app.directive('shirt', function () {
	return {
		templateUrl: 'scripts/directives/shirt/shirt.html',
		restrict: 'E',
		scope: {
			ref: '='
		},
		link: function (scope, element, attributes) {

		}
	};
});