'use strict';

videoUploader_uploadVideo.component('uploadVideo', {
    templateUrl: 'upload-video/upload-video.component.html',
    controllerAs: 'vm',
    controller: 'UploadVideoController'
});

videoUploader_uploadVideo.controller('UploadVideoController', UploadVideoController);
UploadVideoController.$inject = [ 'constants' ];

function UploadVideoController(constants) {
  var vm = this;

  vm.uploadUrl = constants.uploadUrl;

  vm.done = function(hashedId) {
    vm.src = "https://fast.wistia.net/embed/iframe/" + hashedId;
  }

  vm.uploading = function (e, data) {
    vm.loaded = data.loaded;
    vm.total = data.total;
  }
}