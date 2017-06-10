angular.module('tagger')

.service('editorService', [ '$http', 'stateService', function($http, stateService) {
  var blank = 
  {
    'id' : '',
    'title': '',
    'text': ''
  };
  
  var current = {};

  return {
    get: () => current,
    set: (note) => {
      current = note;
      stateService.set({ browsing: true, creating: false, editing: false });
    },
    new: () => {
      current = blank;
      stateService.set({ creating: true, browsing: false});
    },
    create: (note) => {
      //post request
      // $http.post( '/notes', note)
      // .then((note) => {
      //   console.log('posted', note);
      // })
      stateService.set({ browsing: true, creating: false });
    },
    update: (note) => {
      //put request
      //update note
      stateService.set({ browsing: true, editing: false });
    },
    delete: (note) => {
      //put request
      //set note = blank
      stateService.set({ browsing: true, editing: false });
    }
  };
}]);