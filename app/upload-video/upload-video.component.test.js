'use strict';

describe('UploadVideoController', function() {
  var $componentController, constants;

  beforeEach(module('videoUploader.uploadVideo'));
  beforeEach(inject(function(_$componentController_, _constants_) {
    $componentController = _$componentController_;
    constants = _constants_;
  }));

  it('should initialize the uploadUrl variable with the UPLOAD_URL constant`s value', function() {
    var ctrl = $componentController('uploadVideo', constants, null);
    ctrl.$onInit();
    expect(ctrl.uploadUrl).toEqual(constants.UPLOAD_URL);
  });
});