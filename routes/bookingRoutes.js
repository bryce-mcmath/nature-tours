const express = require('express');
const router = express.Router();
const { protect, restrictTo } = require('../controllers/authController');
const {
  getCheckoutSession,
  getBooking,
  getAllBookings,
  createBooking,
  updateBooking,
  deleteBooking,
} = require('../controllers/bookingController');

router.get('/checkout-session/:tourId', protect, getCheckoutSession);

router.use(protect, restrictTo('admin', 'lead-guide'));

router.route('/').get(getAllBookings).post(createBooking);

router.route('/:id').get(getBooking).patch(updateBooking).delete(deleteBooking);

module.exports = router;
