import { showAlert } from './alert';
import axios from 'axios';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      showAlert(res.data.status, 'Logged in successfully!');
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

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });

    if (res.data.status === 'success') {
      location.assign('/');
    } else {
      showAlert('error', 'Error logging out! Please try again');
    }
  } catch (err) {
    console.log(err);
    showAlert('error', 'Error logging out! Please try again');
  }
};
