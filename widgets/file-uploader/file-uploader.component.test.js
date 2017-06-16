'use strict';

describe('FileUploaderController', function() {
  var $componentController, $rootScope, $scope, $element;

  beforeEach(module('videoUploader.widgets'));
  beforeEach(inject(function(_$componentController_, _$rootScope_) {
    $componentController = _$componentController_;
    $rootScope = _$rootScope_;
  }));

  it('should call the `onUploading` binding, when uploading the file', function() {
    var onUploadingSpy = jasmine.createSpy('onUploading');
    var bindings = { onUploading: onUploadingSpy };
    $scope = $rootScope.$new();
    $element = {};
    var ctrl = $componentController('fileUploader', { $scope: $scope, $element: $element }, bindings);
    var e = 'mockE';
    var data = 'mockData';

    ctrl.progress(e, data);
    expect(onUploadingSpy).toHaveBeenCalledWith({ e: e, data: data });
  });

  it('should call the `onDone` binding, when the file is uploaded', function() {
    var onDoneSpy = jasmine.createSpy('onDone');
    var bindings = { onDone: onDoneSpy };
    $scope = $rootScope.$new();
    $element = {};
    var ctrl = $componentController('fileUploader', { $scope: $scope, $element: $element }, bindings);
    var e = 'mockE';
    var data = { result: { hashed_id: 'test-hash' } };

    ctrl.done(e, data);
    expect(onDoneSpy).toHaveBeenCalledWith({ hashedId: data.result.hashed_id });
  });

  it('should call the `onFail` binding, when the file uploading has failed', function() {
    var onFailSpy = jasmine.createSpy('onFail');
    var bindings = { onFail: onFailSpy };
    $scope = $rootScope.$new();
    $element = {};
    var ctrl = $componentController('fileUploader', { $scope: $scope, $element: $element }, bindings);
    var e = 'mockE';
    var data = { 
      jqXHR: { 
        status: '403',
        statusText: 'Forbidden',
        responseText: '{ error: "You have exceed the number of videos you are allowed to upload." }'
      } 
    };
    var param = { status: { code: data.jqXHR.status, text: data.jqXHR.statusText }, response: data.jqXHR.responseText };

    ctrl.fail(e, data);
    expect(onFailSpy).toHaveBeenCalledWith(param);
  });
});