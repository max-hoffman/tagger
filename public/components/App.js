angular.module('tagger')

.controller('AppCtrl', [ 'all', 'editor', function(all, editor) {
  // all notes methods
  this.getAllNotes = all.get;
  this.fetch = all.fetch;
  //editor methods
  this.getCurrentNote = editor.get;
  this.set = editor.set; 
  this.new = editor.new; 
  this.create = editor.create;
  this.update = editor.update;
  this.delete = editor.delete;
}])

.directive('App', [function() {
  return {
    controller: 'AppCtrl as ctrl',
    bindToController: true,
    scope: {

    },
    restrict: 'E'
  };
}]);