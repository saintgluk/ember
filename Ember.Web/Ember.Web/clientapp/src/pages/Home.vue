<template>
  <div>
    Home
    <b-button @click="runmy" size="sm" variant="dark">
      <b-icon icon="play" variant="success"></b-icon> runmy
    </b-button>
  </div>
</template>
<script>
// import axios from 'axios';

export default {
  methods: {
    runmy() {
      const username = 'test';
      const password = 'test';
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      };

      return fetch('https://localhost:44317/api/Auth/Authenticate', requestOptions)
          .then((response) => {
            return response.text().then((text) => {
              const data = text && JSON.parse(text);
              if (!response.ok) {
                // if (response.status === 401) {
                // // auto logout if 401 response returned from api
                //   logout();
                //   location.reload(true);
                // }

                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
              }

              return data;
            });
          })
          .then((user) => {
            console.log(user);
            // login successful if there's a jwt token in the response
            if (user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
          });


      // axios.create({
      //  baseURL: 'https://localhost:44317/api/Default',
      //  withCredentials: true,
      //  // headers: {
      //  //   'Access-Control-Allow-Origin': 'http://localhost:50598',
      //  // }
      // }).get('GetRow')
      //    .then((response) => {
      //      console.log(response.data);
      //    })
      //    .catch((e) => {
      //      console.log(e, e.response);
      //      this.$bvToast.toast(`На странице произошла ошибка: ${e.message}`, this.toastSettings.error);
      //    });
    },
  }
};
</script>