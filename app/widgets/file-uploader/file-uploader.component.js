'use strict';

var widgets = angular.module('videoUploader.widgets');

widgets.component('fileUploader', {
    templateUrl: 'widgets/file-uploader/file-uploader.component.html',
    controllerAs: 'vm',
    controller: 'FileUploaderController',
    bindings: {
        onUploading: '&',
        onDone: '&',
        url: '<'
    }
});

widgets.controller('FileUploaderController', FileUploaderController);
FileUploaderController.$inject = ['$scope', '$element']

function FileUploaderController($scope, $element) {
    var vm = this;

    vm.progress = function (e, data) {
        vm.onUploading({ e: e, data: data });
        $scope.$apply();
    }

    vm.done = function (e, data) {
        vm.onDone({ hashedId: data.result.hashed_id });
        $scope.$apply();
    }

    vm.$onInit = function () {
        var fileUploader = $element.find('.file-uploader');
        var uploadButton = $element.find('.upload-btn');

        fileUploader.fileupload({
            dataType: 'json',
            url: vm.url,
            done: vm.done,
            progress: vm.progress
        });

        uploadButton.on('click', function() {
            fileUploader.click();
        });
    }
}
