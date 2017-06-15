'use strict';

var widgets = angular.module('videoUploader.widgets');

// This component is using an iframe template.
// The other way around would be to use the oEmbed API to retrieve it.
// Example: http://fast.wistia.com/oembed?url=http%3A%2F%2Fhome.wistia.com%2Fmedias%2F/HASHED_ID
widgets.component('videoEmbed', {
    templateUrl: 'widgets/video-embed/video-embed.component.html',
    controllerAs: 'vm',
    controller: 'VideoEmbedController',
    bindings: {
        src: '<'
    }
});

widgets.controller('VideoEmbedController', VideoEmbedController);
VideoEmbedController.$inject = [ '$sce']

function VideoEmbedController($sce) {
    var vm = this;

    vm.getSrc = function() {
        return $sce.trustAsResourceUrl(vm.src);
    }
}
