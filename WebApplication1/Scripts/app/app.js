'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.when("/login", { templateUrl: 'account/login.html', controller: 'Scripts/app/controller/login.controller.js' });
    $routeProvider.when("/register", { templateUrl: 'account/register.html', controller: 'Scripts/app/controller/register.controller.js' });

    $routeProvider.when("/admin/create-user", { templateUrl: 'admin/create-user.html', controller: 'Scripts/app/controller/create-user.controller.js' });
    $routeProvider.when("/admin/update-user", { templateUrl: 'admin/update-user.html', controller: 'Scripts/app/controller/update-user.controller.js' });
    $routeProvider.when("/admin/delete-user", { templateUrl: 'admin/delete-user.html', controller: 'Scripts/app/controller/delete-user.controller.js' });
    $routeProvider.when("/admin/user", { templateUrl: 'admin/user.html', controller: 'Scripts/app/controller/app/user.controller.js' });

    $routeProvider.when("/dashboard/admin-dashboard", { templateUrl: 'dashboard/admin-dashboard.html', controller: 'Scripts/app/controller/admin-dashboard.controller.js'});
    $routeProvider.when("/index", { templateUrl: 'dashboard/index'});
    routeProvider.otherwise({redirectTo: '/view1'});
}]);
