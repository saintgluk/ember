// import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
  login,
  logout,
  getAll
};
// eslint-disable-next-line
function login(username, password) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  };

  return fetch('https://localhost:44317/api/Auth/Authenticate', requestOptions)
      .then(handleResponse)
      .then((user) => {
        // login successful if there's a jwt token in the response
        if (user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
        }

        return user;
      });
}
// eslint-disable-next-line
function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem('user');
}
// eslint-disable-next-line
function getAll() {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  };

  return fetch('https://localhost:44317/api/Auth/GetAll', requestOptions).then(handleResponse);
}
// eslint-disable-next-line
function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}