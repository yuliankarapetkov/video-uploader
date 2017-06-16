'use strict';

angular.module('videoUploader', [
  'ngRoute',
  'videoUploader.core',
  'videoUploader.widgets',
  'videoUploader.uploadVideo'
]).
  config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider
      .when('/upload-video', {
        template: '<upload-video></upload-video>'
      })
      .otherwise({ redirectTo: '/upload-video' });
  }]);