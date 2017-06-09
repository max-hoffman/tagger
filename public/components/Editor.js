angular.module('tagger')

.controller('EditorCtrl', [function() {

}])

.directive('Editor', [function() {
  return {
    controller: 'EditorCtrl as ctrl',
    bindToController: true,
    scope: {
      
    },
    restrict: 'E'
  };
}]);