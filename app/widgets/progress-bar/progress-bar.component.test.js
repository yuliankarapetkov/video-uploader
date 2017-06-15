'use strict';

describe('ProgressBarController', function() {
  var $componentController;

  beforeEach(module('videoUploader.widgets'));
  beforeEach(inject(function(_$componentController_) {
    $componentController = _$componentController_;
  }));

  it('should return the current progress in percentage', function() {
    var bindings = { loaded: 50, total: 100 };
    var ctrl = $componentController('progressBar', null, bindings);
    expect(ctrl.getProgress()).toEqual(50);
  });

  it('should return a CSS object { width: "50%" }', function() {
    var bindings = { loaded: 50, total: 100 };
    var ctrl = $componentController('progressBar', null, bindings);
    expect(ctrl.getBarStyle()).toEqual({ width: '50%' });
  });
});