angular.module('tagger')

.service('stateService', [function() {
  var state = {
    browsing: false,
    creating: true,
    editing: false
  };

  return {
    setNew: (newState) => state = Object.assign(newState, state),
    get: {
      browsing: () => state.browsing,
      creating: () => state.creating,
      editing: () => state.editing
    }
  };
}]);