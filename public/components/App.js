angular.module('tagger')

.controller('AppCtrl', [ 'notesService', 'editorService', function(notesService, editorService) {
  // all notes methods
  this.getAllNotes = notesService.get;
  this.fetch = notesService.fetch;
  //editor methods
  this.getCurrentNote = editorService.get;
  this.set = editorService.set; 
  this.new = editorService.new; 
  this.create = editorService.create;
  this.update = editorService.update;
  this.delete = editorService.delete;
}])

.directive('app', function() {
  return {
    controller: 'AppCtrl as ctrl',
    bindToController: true,
    templateUrl: './templates/app.html',
    scope: {

    },
    restrict: 'E'
  };
});