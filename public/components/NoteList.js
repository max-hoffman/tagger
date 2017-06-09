angular.module('tagger')

.controller('NoteListCtrl', [function() {

}])

.directive('noteList', [function() {
  return {
    controller: 'NoteListCtrl as ctrl',
    bindToController: true,
    templateUrl: '../templates/noteList.html',
    scope: {
      
    },
    restrict: 'E'
  };
}]);