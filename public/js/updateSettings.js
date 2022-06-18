import { showAlert } from './alert';
import axios from 'axios';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url:
        type === 'password'
          ? '/api/v1/users/updateMyPassword'
          : '/api/v1/users/updateMe',
      data,
    });

    if (res.data.status === 'success') {
      showAlert(res.data.status, 'Account info updated successfully!');
    } else {
      showAlert('error', res.data.message);
    }
  } catch (err) {
    console.log(err);
    showAlert('error', err.response.data.message);
  }
};
