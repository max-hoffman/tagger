const path = require('path');
const Promise = require('bluebird');
const db = require('../models');

module.exports = {
  getOneNoteCtrl: function(req, res) {
    if (!req.params.id) {
      res.sendStatus(404, { 'error': 'Specify note id and try again.' });
      return;
    }
    db.Note.findOne({ where: { id: req.params.id }})
    .then(note => {
      res.send(note);
    })
    .catch(error => {
      console.log('get error in server:', error);
      res.sendStatus(505, error);
    });
  },

  postNoteCtrl: function(req, res) {
    if (!req.body.title || !req.body.text) {
      res.sendStatus(404, { 'error': 'Tried to submit with empty fields.' });
      return;
    }
    db.Note.create({ title: req.body.title, text: req.body.text })
    .then(note => {
      console.log('post success:', note.dataValues.title);
      res.send(note);
    })
    .catch(error => {
      console.log('post error in server:', error);
      res.sendStatus(505, error);
    });
  },

  getNotesCtrl: function(req, res) {
    db.Note.findAll()
    .then(notes => {
      res.send(notes);
    })
    .catch(error => {
      console.log('get error in server:', error);
      res.sendStatus(500, error);
    });
  },

  updateNoteCtrl: function(req, res) {
    if (!req.params.id || !req.body.title || !req.body.text) {
      res.sendStatus(404, { 'error': 'Specify note id, title, text and try again.' });
      return;
    }
    db.Note
    .update({ 
      title: req.body.title,
      text: req.body.text 
    }, {
      where: { id: req.params.id }             
    })
    .then(indexes => {
      res.send({'success': `updated notes in database indexes: ${indexes}`});
    })
    .catch(error => {
      console.log('update error in server:', error);
      res.sendStatus(500, error);
    });
  },

  deleteNoteCtrl: function(req, res) {
    if (!req.params.id) {
      res.sendStatus(404, { 'error': 'Specify note id and try again.' });
      return;
    }
    db.Note.destroy({ where: { id: req.params.id }})
    .then(() => {
      res.send({ 'success': `deleted note with id = + ${req.params.id}` });
    })
    .catch(error => {
      console.log('delete error in server:', error);
      res.sendStatus(500, error);
    });
  }
}