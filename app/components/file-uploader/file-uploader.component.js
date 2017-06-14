'use strict';

videoUploader.component('fileUploader', {
    templateUrl: 'components/file-uploader/file-uploader.component.html',
    controllerAs: 'vm',
    controller: 'FileUploaderController',
    bindings: {
        onUploading: '&',
        onDone: '&'
    }
});

videoUploader.controller('FileUploaderController', FileUploaderController);
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

    var fileUpload = $element.find("#fileupload").fileupload({
        dataType: 'json',
        url: "https://upload.wistia.com?api_password=cc17ef2606978d5af02454a8f82bee751dedb3fbf71606e41408b4f34134d0f9",
        done: done,
        progress: progress
    });

}
