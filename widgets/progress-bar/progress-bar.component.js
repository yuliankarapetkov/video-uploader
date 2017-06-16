'use strict';

var widgets = angular.module('videoUploader.widgets');

// A simple progress bar component, which receives just two values - loaded and total.
widgets.component('progressBar', {
    templateUrl: 'widgets/progress-bar/progress-bar.component.html',
    controllerAs: 'vm',
    controller: 'ProgressBarController',
    bindings: {
        loaded: '=',
        total: '='
    }
});

widgets.controller('ProgressBarController', ProgressBarController);

function ProgressBarController() {
    var vm = this;

    // Returns a proper width CSS property in percentage. 
    vm.getBarStyle = function() {
        var progress = calculateProgress();
        return { width: progress + '%' }
    }

    // Returns the progress in percentage.
    vm.getProgress = function() {
        return calculateProgress();
    }

    // Calculate the progress percentage, having the loaded and the total values.
    var calculateProgress = function() {
        return parseInt(vm.loaded / vm.total * 100, 10);
    }
}
