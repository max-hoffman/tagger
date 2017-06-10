angular.module('tagger')

.controller('EditorCtrl', [function() {

  this.saveEdit = () => this.update(this.note);

  this.deleteNote = () => this.delete(this.note);

  this.createNote = () => this.create(this.note);

  // this.cancelEdit = () => this.setState({creating: false, browsing: true, editing: false});

  // this.editNote = () => this.setState({creating: false, browsing: false, editing: true});
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
      getState: '<',
      cancelEdit: '<',
      triggerEdit: '<'
    },
    restrict: 'E',
    link(s,e,a,c) {
      console.log(c);
    }
  };
}]);
