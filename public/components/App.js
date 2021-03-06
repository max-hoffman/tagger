angular.module('tagger')

.controller('AppCtrl', [ 'notesService', 'editorService', 'stateService', function(notesService, editorService, stateService) {
  // all notes methods
  this.getAll = notesService.get;
  this.fetch = notesService.fetch;
  //editor methods
  this.getCurrent = editorService.get;
  this.set = editorService.set; 
  this.new = editorService.new; 
  this.create = editorService.create;
  this.update = (note) => {
    editorService.update(note);
  };
  this.delete = (note) => {
    editorService.delete(note);
    editorService.new();
  };
  //state methods
  this.getState = stateService.get;
  this.setState = stateService.set;
  //editing methods
  this.triggerEdit = () => stateService.set({creating: false, browsing: false, editing: true});
  this.cancelEdit = () => stateService.set({creating: false, browsing: true, editing: false});
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
    restrict: 'E',
    link(s,e,a,c) {
      console.log(c);
    }
  };
});