angular.module('tagger')

.service('editorService', [ '$http', 'stateService', 'notesService', function($http, stateService, notesService) {
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
      angular.element(document.querySelector('.active')).removeClass('active');
    },
    create: (note) => {
      $http.post( '/notes', note)
      .then((note) => {
        notesService.fetch();
      })
      stateService.set({ browsing: true, creating: false });
    },
    update: (note) => {
      $http.put( `/notes${note.id}`, note)
      .then((note) => {
        notesService.fetch();
      });
      stateService.set({ browsing: true, editing: false, creating: false });
    },
    delete: (note) => {
      $http.delete( `/notes${note.id}`)
      .then((note) => {
        notesService.fetch();
      });
      stateService.set({ browsing: true, editing: false });
    }
  };
}]);