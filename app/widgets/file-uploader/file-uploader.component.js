'use strict';

var widgets = angular.module('videoUploader.widgets');

widgets.component('fileUploader', {
    templateUrl: 'widgets/file-uploader/file-uploader.component.html',
    controllerAs: 'vm',
    controller: 'FileUploaderController',
    bindings: {
        onUploading: '&',
        onDone: '&',
        onFail: '&',
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

    vm.fail = function(e, data) {
        vm.onFail({ status: { code: data.jqXHR.status, text: data.jqXHR.statusText }, response: data.jqXHR.responseText });
        $scope.$apply();
    }

    vm.$onInit = function () {
        var fileUploader = $element.find('.file-uploader');
        var uploadButton = $element.find('.upload-btn');

        // Other callbacks could be added.
        // See details: https://github.com/blueimp/jQuery-File-Upload/wiki/Options#callback-options
        fileUploader.fileupload({
            dataType: 'json',
            url: vm.url,
            progress: vm.progress,
            done: vm.done,
            fail: vm.fail
        });

        uploadButton.on('click', function() {
            fileUploader.click();
        });
    }
}
