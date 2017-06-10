angular.module('tagger')

.controller('NoteCtrl', [function() {
  
}])

.directive('note', [function() {
  return {
    controller: 'NoteCtrl as ctrl',
    bindToController: true,
    templateUrl: '../templates/note.html',
    scope: {
      note: '<',
      onClick: '&'
    },
    restrict: 'E',
    link(s, e, a, c) {
      console.log('note controller', c);
    }
  };
}]);