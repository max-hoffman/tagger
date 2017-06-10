angular.module('tagger')

.service('notesService', [ '$http', function($http) {
  var notes=[];
  return {
    get: () => notes,
    fetch: () => {
      //get request
      $http({
        method: 'GET',
        url: '/notes'
      })
      .then((results) => {
        console.log('get req', results);
        notes = results;
      })
    }
  };
}]);