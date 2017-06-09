angular.module('tagger')

.service('notesService', [function() {
  var notes=[];
  return {
    get: () => notes,
    fetch: () => {
      //get request
      //update notes list
    }
  };
}]);