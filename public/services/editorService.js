angular.module('tagger')

.service('editorService', [ '$http', function($http) {
  var blank = 
  {
    'id' : '',
    'title': '',
    'text': ''
  };
  
  var current = {};

  return {
    get: () => current,
    set: (note) => current = note,
    new: () => current = blank,
    create: (note) => {
      //post request
      // $http.post( '/notes', note)
      // .then((note) => {
      //   console.log('posted', note);
      // })
      //update note
    },
    update: (note) => {
      //put request
      //update note
    },
    delete: (note) => {
      //put request
      //set note = blank
    }
  };
}]);