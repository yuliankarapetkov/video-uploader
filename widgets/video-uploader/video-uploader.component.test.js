'use strict';

describe('VideoUploaderController', function () {
  var $componentController,
    constants,
    VideoUploaderState;

  VideoUploaderState = Object.freeze({
    NoFile: 1,
    Uploading: 2,
    Done: 3,
    Fail: 4
  });

  beforeEach(module('videoUploader.widgets'));
  beforeEach(inject(function (_$componentController_, _constants_) {
    $componentController = _$componentController_;
    constants = _constants_;
  }));

  var src = 'http://www.testthis.app/angular/1.6.4/unit-testing';
  var bindings = { src: src };

  it('should initialize all variables properly', function () {
    var ctrl = $componentController('videoUploader', constants, bindings);
    ctrl.$onInit();

    expect(ctrl.iframeSrc).toEqual(constants.IFRAME_SRC);
    expect(ctrl.videoUploaderState).toEqual(VideoUploaderState);
    expect(ctrl.state).toEqual(VideoUploaderState.NoFile);
    expect(ctrl.uploadUrl).toEqual(ctrl.url);
  });

  it('should set the values of state, loaded and total properties on calling uploading()', function () {
    var ctrl = $componentController('videoUploader', constants, bindings);
    var data = { loaded: 60, total: 100 };

    ctrl.$onInit();
    ctrl.uploading('', data);

    expect(ctrl.state).toEqual(VideoUploaderState.Uploading);
    expect(ctrl.loaded).toEqual(data.loaded);
    expect(ctrl.total).toEqual(data.total);
  });

  it('should set the values of state and src properties on calling done()', function () {
    var ctrl = $componentController('videoUploader', constants, bindings);
    var hashedId = 'id';

    ctrl.$onInit();
    ctrl.done(hashedId);

    expect(ctrl.state).toEqual(VideoUploaderState.Done);
    expect(ctrl.src).toEqual(ctrl.iframeSrc + hashedId);
  });

  it('should set the values of state and error properties on calling fail()', function () {
    var ctrl = $componentController('videoUploader', constants, bindings);
    var response = '{ "error": "You have exceed the number of videos you are allowed to upload." }';

    ctrl.$onInit();
    ctrl.fail('', response);

    expect(ctrl.state).toEqual(VideoUploaderState.Fail);
    expect(ctrl.error).toEqual(JSON.parse(response).error);
  });
});