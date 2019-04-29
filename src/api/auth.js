import axios from "axios";

// Make a request for a user with a given ID
export const userLoginApi = ({ user, password }, sucessCallback) => {
  axios
    .get(`/login?user=${user}&password=${password}`)
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
