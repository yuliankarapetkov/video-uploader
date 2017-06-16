'use strict';

// This is the main page component, containing the video uploader. 
var uploadVideo = angular.module('videoUploader.uploadVideo');

uploadVideo.component('uploadVideo', {
  templateUrl: 'upload-video/upload-video.component.html',
  controllerAs: 'vm',
  controller: 'UploadVideoController'
});

uploadVideo.controller('UploadVideoController', UploadVideoController);
UploadVideoController.$inject = [ 'constants' ];

function UploadVideoController(constants) {
  var vm = this;

  vm.$onInit = function() {
    // Initialize the uploadUrl with the value from the constants.
    vm.uploadUrl = constants.UPLOAD_URL;
  }
}