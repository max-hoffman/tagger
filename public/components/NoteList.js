angular.module('tagger')

.controller('NoteListCtrl', function($scope) {
})

.directive('noteList', function() {
  return {
    controller: 'NoteListCtrl as ctrl',
    bindToController: true,
    templateUrl: '../templates/noteList.html',
    scope: {
      notes: '<',
      fetch: '<',
      select: '<'
    },
    restrict: 'E'
  };
});