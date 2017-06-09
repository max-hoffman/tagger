angular.module('tagger')

.service('allNotes', [function() {
  var notes=[];
  return {
    get: () => notes,
    fetch: () => {
      //get request
      //update notes list
    }
  };
}]);