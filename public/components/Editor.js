angular.module('tagger')

.controller('EditorCtrl', [function() {
  this.updateNote = () => {
    this.addBrowsing();
    this.update(this.note);
  };

  this.deleteNote = () => {
    this.addBrowsing();
    this.delete(this.note);
  };

  this.newNote = () => {
    addEditing();
    this.new();
  };

  this.createNote = () => {
    this.addCreating();
    this.create(this.note);
  };

  this.editing = false;
  this.creating = true;

  this.addCreating = () => {
    this.editing = false;
    this.creating = true;
  };

  this.addEditing = () => {
    this.editing = true;
    this.creating = false;
  };

  this.addBrowsing = () => {
    this.editing = false;
    this.creating = false;
  };
}])

.directive('editor', [function() {
  return {
    controller: 'EditorCtrl as ctrl',
    bindToController: true,
    templateUrl: '../templates/editor.html',
    scope: {
      note: '<',
      new: '<',
      create: '<',
      update: '<',
      delete: '<'
    },
    restrict: 'E'
  };
}]);
