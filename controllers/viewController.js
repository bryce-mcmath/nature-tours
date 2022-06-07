const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');

exports.getOverview = catchAsync(async (req, res, next) => {
  // Get tour data from collection
  const tours = await Tour.find();

  // Render template
  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  // Get the data for the tour
  const tour = await Tour.findOne({
    slug: req.params.slug,
  }).populate({
    path: 'reviews',
    fields: 'review rating user',
  });

  // Render template
  res.status(200).render('tour', {
    title: `${tour.name} tour`,
    tour,
  });
});

exports.login = async (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account',
  });
};

exports.signup = async (req, res) => {
  res.status(200).render('signup', {
    title: 'Sign up',
  });
};
