const path = require('path');
const router = require('express').Router();
const notes = require('../controllers/notes');

//entry point
router.get('/', function(req, res) {
  res.render('index');
});

//note logic
router.get('/notes:id', notes.getOneNoteCtrl);

router.post('/notes', notes.postNoteCtrl);

router.get('/notes', notes.getNotesCtrl);

router.put('/notes:id', notes.updateNoteCtrl);

router.delete('/notes:id', notes.deleteNoteCtrl);

module.exports = router;