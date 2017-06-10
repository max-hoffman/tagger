angular.module('tagger')

.controller('EditorCtrl', [function() {

  this.setCreating = () => this.setState({creating: true, browsing: false, editing: false});

  this.setEditing = () => this.setState({creating: false, browsing: false, editing: true});

  this.setBrowsing = () => this.setState({creating: false, browsing: true, editing: false});

  this.saveEdit = () => {
    this.setEditing();
    this.update(this.note);
  };

  this.cancelEdit = () => {
    this.setBrowsing();
  };

  this.deleteNote = () => {
    this.setBrowsing();
    this.delete(this.note);
  };

  this.newNote = () => {
    this.new();
  };

  this.createNote = () => {
    this.create(this.note);
  };

  this.editNote = () => {
    this.setEditing();
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
      delete: '<',
      setState: '<',
      getState: '<'
    },
    restrict: 'E',
    link(s,e,a,c) {
      console.log(c);
    }
  };
}]);
