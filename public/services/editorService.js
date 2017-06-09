angular.module('tagger')

.service('editorService', [function() {
  var blank = 
  {
    'id' : '',
    'title': '',
    'text': ''
  };
  
  var current = blank;

  return {
    get: () => current,
    set: (note) => current = note,
    new: () => current = blank,
    create: (note) => {
      //post request
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