angular.module('tagger')

.service('stateService', [function() {
  var state = {
    browsing: true,
    creating: false,
    editing: false
  };

  return {
    set: (newState) => {
      for (key in newState) {
        state[key] = newState[key];
      }
      console.log(state);
    },
    get: {
      browsing: () => state.browsing,
      creating: () => state.creating,
      editing: () => state.editing
    }
  };
}]);