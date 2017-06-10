angular.module('tagger')

.controller('AppCtrl', [ 'notesService', 'editorService', function(notesService, editorService) {
  // all notes methods
  this.getAll = notesService.get;
  this.fetch = notesService.fetch;
  //editor methods
  this.getCurrent = editorService.get;
  this.set = editorService.set; 
  this.new = editorService.new; 
  this.create = editorService.create;
  this.update = editorService.update;
  this.delete = editorService.delete;
  //initialize
  (function init() {
    notesService.fetch();
  })();
}])

.directive('app', function() {
  return {
    controller: 'AppCtrl as ctrl',
    bindToController: true,
    templateUrl: './templates/app.html',
    scope: {},
    restrict: 'E'
  };
});