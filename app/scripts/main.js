var app = angular.module('aeyos.com', ['ui.router']);

app.config(['$stateProvider', function($stateProvider) {
	$stateProvider.
		state('home', {
			url: '',
			templateUrl: 'scripts/controllers/home/home.html',
			controller: 'mainHomeCtrl'
		}).
		state('store', {
			url: '/store',
			templateUrl: 'scripts/controllers/store/store.html',
			controller: 'mainStoreCtrl'
		}).
		state('about', {
			url: '/about',
			templateUrl: 'scripts/controllers/about/about.html',
			controller: 'mainAboutCtrl'
		});
}]);