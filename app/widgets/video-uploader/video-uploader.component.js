'use strict';

var widgets = angular.module('videoUploader.widgets');

widgets.component('videoUploader', {
  templateUrl: 'widgets/video-uploader/video-uploader.component.html',
  controllerAs: 'vm',
  controller: 'VideoUploaderController',
  bindings: {
    url: '<'
  }
});

widgets.controller('VideoUploaderController', VideoUploaderController);
VideoUploaderController.$inject = ['constants'];

function VideoUploaderController(constants) {
  var vm = this;

  vm.$onInit = function () {
    vm.iframeSrc = constants.IFRAME_SRC;
    vm.videoUploaderState = VideoUploaderState;
    vm.state = VideoUploaderState.NoFile;
    vm.uploadUrl = vm.url;
    vm.error = null;
  }

  vm.uploading = function (e, data) {
    vm.state = VideoUploaderState.Uploading;
    vm.loaded = data.loaded;
    vm.total = data.total;
  }

  vm.done = function (hashedId) {
    vm.state = VideoUploaderState.Done;
    vm.src = vm.iframeSrc + hashedId;
  }

  vm.fail = function(status, response) {
    vm.state = VideoUploaderState.Fail;
    vm.error = JSON.parse(response).error;
  }
}