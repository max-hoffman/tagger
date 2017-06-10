angular.module('tagger')

.controller('EditorCtrl', [function() {
  this.editing = false;
  this.creating = true;
  this.browsing = false;

  if (this.note.title) {
    this.addBrowsing();
  }

  this.addCreating = () => {
    this.editing = false;
    this.creating = true;
    this.browsing = false;
  };

  this.addEditing = () => {
    this.editing = true;
    this.creating = false;
    this.browsing = false;
  };

  this.addBrowsing = () => {
    this.editing = false;
    this.creating = false;
    this.browsing = true;
  };

  this.saveEdit = () => {
    this.addBrowsing();
    this.update(this.note);
  };

  this.cancelEdit = () => {
    this.addBrowsing();
  };

  this.deleteNote = () => {
    this.addBrowsing();
    this.delete(this.note);
  };

  this.newNote = () => {
    this.addEditing();
    this.new();
  };

  this.createNote = () => {
    this.addCreating();
    this.create(this.note);
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
    restrict: 'E',
    link(s,e,a,c) {
      console.log(c);
    }
  };
}]);
