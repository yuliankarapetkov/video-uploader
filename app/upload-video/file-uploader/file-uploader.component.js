'use strict';

videoUploader_uploadVideo.component('fileUploader', {
    templateUrl: 'upload-video/file-uploader/file-uploader.component.html',
    controllerAs: 'vm',
    controller: 'FileUploaderController',
    bindings: {
        onUploading: '&',
        onDone: '&',
        uploadUrl: '<'
    }
});

videoUploader_uploadVideo.controller('FileUploaderController', FileUploaderController);
FileUploaderController.$inject = ['$scope', '$element']

function FileUploaderController($scope, $element) {
    var vm = this;

    var progress = function (e, data) {
        vm.onUploading({ e: e, data: data });
        $scope.$apply();
    }

    var done = function (e, data) {
        vm.onDone({ hashedId: data.result.hashed_id });
        $scope.$apply();
    }

    console.log(vm.uploadUrl);

    var fileUpload = $element.find("#fileupload").fileupload({
        dataType: 'json',
        url: vm.url,
        done: done,
        progress: progress
    });
}
