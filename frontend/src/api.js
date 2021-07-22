import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`;


// This is an example to Users Models
export const getAllUsers = () => {
    return axios.get(`${baseURL}/users`);
  };

