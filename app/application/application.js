'use strict'

/**
* The application file bootstraps the angular app by  initializing the main module and 
* creating namespaces and moduled for controllers, filters, services, and directives. 
*/

var Application = Application || {};

Application.Constants = angular.module('rateastogie.constants', []);
Application.Services = angular.module('rateastogie.services', ['rateastogie.constants', 'mongolabResourceHttp']);
Application.Controllers = angular.module('rateastogie.controllers', ['rateastogie.constants']);
Application.Filters = angular.module('rateastogie.filters', []);
Application.Directives = angular.module('rateastogie.directives', ['rateastogie.services']);


angular.module('rateastogie', ['ui', 'ui.bootstrap', 'ui.bootstrap.carousel', 'ui.bootstrap.transition', 'ngGrid', 'mongolabResourceHttp', 'rateastogie.filters', 'rateastogie.services', 'rateastogie.directives', 'rateastogie.constants', 'rateastogie.controllers']).
  config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.
        when('/', {templateUrl:'home/home-partial.html'}).
        when('/register', {templateUrl:'user/user-register-partial.html'}).
        when('/myprofile', {templateUrl:'user/user-profile-partial.html'}).
        when('/myemail', {templateUrl:'user/user-change-email-partial.html'}).
        when('/mypassword', {templateUrl:'user/user-change-password-partial.html'}).
        when('/cigar', {templateUrl:'cigar/cigar-entry-partial.html'}).
        otherwise({templateUrl: 'error/error-partial.html'});
  }]);
