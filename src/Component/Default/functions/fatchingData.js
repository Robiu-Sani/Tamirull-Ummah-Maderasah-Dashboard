import axios from "axios";

const fetchOutput = (urlPath) => {
  return axios
    .get(`${import.meta.env.VITE_SERVER}/${urlPath}`)
    .then((response) => response.data)
    .catch((err) => err);
};

export default fetchOutput;
