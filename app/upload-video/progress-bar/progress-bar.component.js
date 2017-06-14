'use strict';

videoUploader_uploadVideo.component('progressBar', {
    templateUrl: 'upload-video/progress-bar/progress-bar.component.html',
    controllerAs: 'vm',
    controller: 'ProgressBarController',
    bindings: {
        loaded: '=',
        total: '='
    }
});

videoUploader_uploadVideo.controller('ProgressBarController', ProgressBarController);

function ProgressBarController() {
    var vm = this;

    // Returns a proper width CSS property in percentage. 
    vm.getProgress = function() {
        var progress = calculateProgress();
        return { width: progress + '%' }
    }

    // Calculate the progress percentage, having the loaded and the total values.
    var calculateProgress = function() {
        return parseInt(vm.loaded / vm.total * 100, 10);
    }
}
