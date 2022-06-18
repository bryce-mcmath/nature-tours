import axios from 'axios';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe('pk_test_cGdGk1uF0FDXf4Pw3XAkp2PW00H0bGmfwJ');

    // Get session from server
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // Use stripe object to create checkout form + charge card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    showAlert('error', error);
  }
};
