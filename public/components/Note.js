angular.module('tagger')

.controller('NoteCtrl', [function() {

}])

.directive('Note', [function() {
  return {
    controller: 'NoteCtrl as ctrl',
    bindToController: true,
    scope: {
      
    },
    restrict: 'E'
  };
}]);