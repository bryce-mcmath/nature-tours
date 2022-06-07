const express = require('express');
const {
  getOverview,
  getTour,
  login,
  signup,
} = require('../controllers/viewController');

const router = express.Router();

router.get('/', getOverview);

router.get('/tour/:slug', getTour);

router.get('/login', login);

router.get('/signup', signup);

module.exports = router;
