const express = require('express');
const router = express.Router();
const surveyModel = require('../models/surveyModel');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const classInfoData = await surveyModel.getAllTopicData();

  res.render('template', {
    locals: {
      title: 'Welcome',
      classInfoData: classInfoData
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;
