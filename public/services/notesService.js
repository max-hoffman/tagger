angular.module('tagger')

.service('notesService', [ '$http', function($http) {
  var notes=[];
  return {
    get: () => notes,
    fetch: () => {
      //get request
      $http.get('/notes')
      .then((results) => notes = results.data )
      .then(() => {
        console.log(notes); 
      });
    }
  };
}]);