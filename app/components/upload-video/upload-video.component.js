'use strict';

var videoUploader = angular.module('videoUploader.uploadVideo', ['ngRoute']);

videoUploader.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/upload-video', {
    template: '<upload-video></upload-video>'
  });
}]);

videoUploader.component('uploadVideo', {
    templateUrl: 'components/upload-video/upload-video.component.html',
    controllerAs: 'vm',
    controller: 'UploadVideoController'
});

videoUploader.controller('UploadVideoController', UploadVideoController);

function UploadVideoController() {
  var vm = this;

  vm.done = function(hashedId) {
    vm.src = "https://fast.wistia.net/embed/iframe/" + hashedId;
  }

  vm.uploading = function (e, data) {
    vm.loaded = data.loaded;
    vm.total = data.total;
  }
}