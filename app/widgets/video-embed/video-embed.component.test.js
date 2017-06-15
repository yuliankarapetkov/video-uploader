'use strict';

describe('VideoEmbedController', function() {
  var $componentController, $sce;

  beforeEach(module('videoUploader.widgets'));
  beforeEach(inject(function(_$componentController_, _$sce_) {
    $componentController = _$componentController_;
    $sce = _$sce_;
  }));

  it('should return the trusted resource URL provided in the bindings', function() {
    var src = 'http://www.testthis.app/angular/1.6.4/unit-testing';
    var bindings = { src: src };
    var ctrl = $componentController('videoEmbed', null, bindings);
    expect($sce.getTrustedResourceUrl(ctrl.getSrc())).toEqual(src);
  });
});