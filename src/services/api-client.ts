import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3a3b98d81e794174bf62686dc31e36b6",
  },
});
