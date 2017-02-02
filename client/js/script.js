var myApp = angular.module('myApp', ['ngRoute']);

//CLIENT ROUTING
myApp.config(function($routeProvider) {
	$routeProvider
	.when('/', {templatedUrl: 'partials/customers.html'})
	.when('/orders', {templatedUrl: 'partials/orders.html'})
	.otherwise({rediretTo:('/')});
})