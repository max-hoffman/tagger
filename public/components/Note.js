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
      e.bind('click', function() {
        angular.element(document.querySelector('.active')).removeClass('active');
        e.addClass('active');
      });
    }
  };
}]);