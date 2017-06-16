'use strict';

var widgets = angular.module('videoUploader.widgets');

// A video-uploader component
// It uses the Wistia API to upload a video and then preview it.
// See more: https://wistia.com/doc/developers 
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

  // Initializing all needed variables.
  vm.$onInit = function () {
    // iframeSrc - the base url of the iframe that will be used to embed the video.
    // videoUploaderState - reference to the VideoUploaderState enum, used in the view.
    // state - the current state of the uploader.
    // error - containing an error message, if an error occurs.  
    vm.iframeSrc = constants.IFRAME_SRC;
    vm.videoUploaderState = VideoUploaderState;
    vm.state = VideoUploaderState.NoFile;
    vm.uploadUrl = vm.url;
    vm.error = null;
  }

  // On uploading handler
  // Show the progress bar.
  // IMPORTANT: It could be provided as a binding to have more control on the events outside of the component.
  vm.uploading = function (e, data) {
    vm.state = VideoUploaderState.Uploading;
    vm.loaded = data.loaded;
    vm.total = data.total;
  }

  // On done handler
  // Change the value of the iframe URL and show the video.
  // IMPORTANT: It could be provided as a binding to have more control on the events outside of the component.
  vm.done = function (hashedId) {
    vm.state = VideoUploaderState.Done;
    vm.src = vm.iframeSrc + hashedId;
  }

  // On fail handler
  // Display the error.
  // IMPORTANT: It could be provided as a binding to have more control on the events outside of the component.
  vm.fail = function(status, response) {
    vm.state = VideoUploaderState.Fail;
    vm.error = JSON.parse(response).error;
  }
}