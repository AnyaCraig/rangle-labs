const express = require('express');
const Router = express.Router;
const router = Router();
const Technology = require('../models/Technology');

router.get('/', async (req, res, next) => {
  try {
    const docs = await Technology.find();
    res.status(200).json({docs});
  } catch (err) {
    console.error("An error occurred:", err);
    next(err);
  }
});

module.exports = router;
