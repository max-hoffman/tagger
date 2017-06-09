angular.module('tagger')

.controller('EditorCtrl', [function() {

}])

.directive('editor', [function() {
  return {
    controller: 'EditorCtrl as ctrl',
    bindToController: true,
    templateUrl: '../templates/editor.html',
    scope: {
      
    },
    restrict: 'E'
  };
}]);