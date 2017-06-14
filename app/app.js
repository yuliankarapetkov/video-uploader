'use strict';

angular.module('videoUploader', [
  'ngRoute',
  'videoUploader.uploadVideo'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/upload-video'});
}]);
