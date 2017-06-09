angular.module('tagger')

.controller('AppCtrl', [function() {

}])

.directive('App', [function() {
  return {
    controller: 'AppCtrl as ctrl',
    bindToController: true,
    scope: {
      
    },
    restrict: 'E'
  };
}]);