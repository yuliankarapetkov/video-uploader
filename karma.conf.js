//jshint strict: false
module.exports = function (config) {
  config.set({
    basePath: './app',
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app.js',
      'core/*.js',
      'models/*.js',
      'widgets/*.js',
      'widgets/**/*.js',
      'upload-video/upload-video.module.js',
      'upload-video/*.js'
    ],
    reporters: ['spec'],
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['Chrome'],
    plugins: [
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-spec-reporter'
    ],
    singleRun: true
  });
};