angular.module('tagger')

.controller('NoteCtrl', [function() {

}])

.directive('note', [function() {
  return {
    controller: 'NoteCtrl as ctrl',
    bindToController: true,
    templateUrl: '../templates/note.html',
    scope: {
      
    },
    restrict: 'E'
  };
}]);