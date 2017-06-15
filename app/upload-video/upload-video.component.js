'use strict';

var uploadVideo = angular.module('videoUploader.uploadVideo');

widgets.component('uploadVideo', {
  templateUrl: 'upload-video/upload-video.component.html',
  controllerAs: 'vm',
  controller: 'UploadVideoController'
});

widgets.controller('UploadVideoController', UploadVideoController);
UploadVideoController.$inject = ['constants'];

function UploadVideoController(constants) {
  var vm = this;

  vm.uploadUrl = constants.UPLOAD_URL;
}