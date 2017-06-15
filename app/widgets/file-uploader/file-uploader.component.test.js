'use strict';

describe('FileUploaderController', function() {
  var $componentController, $scope, $element;

  beforeEach(module('videoUploader.widgets'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
    // $scope = _$scope_;
    // $element = _$element_;
  }));

  it('should call the `onUploading` binding, when uploading the file', function() {
    var onUploadingSpy = jasmine.createSpy('onUploading');
    var bindings = { onUploading: onUploadingSpy };
    $scope = {};
    $element = {};
    var ctrl = $componentController('fileUploader', { $scope: $scope, $element: $element }, bindings);

    ctrl.progress('mockE', 'mockData');
    expect(onUploadingSpy).toHaveBeenCalledWith({ e: 'mockE', data: 'mockData' });
  });

//   it('should return the trusted resource URL provided in the bindings', function() {
//     var src = 'http://www.testthis.app/angular/1.6.4/unit-testing';
//     var bindings = { src: src };
//     var ctrl = $componentController('videoEmbed', null, bindings);
//     expect(sce.getTrustedResourceUrl(ctrl.getSrc())).toEqual(src);
//   });
});