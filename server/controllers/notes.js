const path = require('path');
const Promise = require('bluebird');
const db = require('../models');

//TODO: Get note endpoint
exports.getOneNoteCtrl = function(req, res) {
  res.send({"hit get note endpoint" : true})
  return new Promise(function(resolve, reject) {
    
  });
};

//TODO: Post note endpoint
exports.postNoteCtrl = function(req, res) {
  db.Note.create({ title: req.body.title, text: req.body.text })
  .then(note => {
    console.log('post success:', note.dataValues.title);
    res.send(note);
  })
  .catch(error => {
    console.log('post error:', error);
  })
};

//TODO: Get all notes endpoint
exports.getNotesCtrl = function(req, res) {
  db.Note.findAll()
  .then(notes => {
    res.send(notes);
  })
};

//TODO: Update note endpoint
exports.updateNoteCtrl = function(req, res) {
  res.send({"hit update endpoint" : true})
  return new Promise(function(resolve, reject) {

  });
};

//TODO: Delete note endpoint
exports.deleteNoteCtrl = function(req, res) {
  res.send({"hit delete endpoint" : true})
  return new Promise(function(resolve, reject) {

  });
};