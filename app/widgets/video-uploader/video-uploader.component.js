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

  var iframeSrc = constants.IFRAME_SRC;

  vm.videoUploaderState = VideoUploaderState;
  vm.state = VideoUploaderState.NoFile;

  vm.uploading = function (e, data) {
    vm.state = VideoUploaderState.Uploading;
    vm.loaded = data.loaded;
    vm.total = data.total;
  }

  vm.done = function (hashedId) {
    vm.state = VideoUploaderState.Done;
    vm.src = iframeSrc + hashedId;
  }

  vm.$onInit = function () {
    vm.uploadUrl = vm.url;
  }
}