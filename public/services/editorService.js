angular.module('tagger')

.service('editorService', [function() {
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
      current.id = note.id,
      current.title = note.title,
      current.text = note.text
    },
    new: () => {
      current.id = blank.id,
      current.title = blank.title,
      current.text = blank.text
    },
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