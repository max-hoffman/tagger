angular.module('tagger')

.controller('NoteListCtrl', [function() {

}])

.directive('NoteList', [function() {
  return {
    controller: 'NoteListCtrl as ctrl',
    bindToController: true,
    scope: {
      
    },
    restrict: 'E'
  };
}]);