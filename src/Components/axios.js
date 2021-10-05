import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-clone-0015.herokuapp.com",
});

export default instance;
