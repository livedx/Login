import axios from "axios";

// Make a request for a user with a given ID
export const userLoginApi = ({ user, password }, sucessCallback) => {
    console.log(user,password)
  axios
    .get(`/login?user=${user}&password=${password}`,{
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },proxy: {
            host: 'localhost',
            port: 8000
        },crossdomain: true
    })
    .then(function(response) {
      // handle success
      if (typeof sucessCallback === "function") {
        sucessCallback(response);
      }
      console.log(response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .then(function() {
      // always executed
    });
};
