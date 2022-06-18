import { showAlert } from './alert';
import axios from 'axios';

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm,
      },
    });

    if (res.data.status === 'success') {
      showAlert(res.data.status, 'Signed up successfully!');
      setTimeout(() => {
        location.assign('/');
      }, 1000);
    } else {
      showAlert('error', res.data.message);
    }
  } catch (err) {
    console.log(err);
    showAlert('error', err.response.data.message);
  }
};
