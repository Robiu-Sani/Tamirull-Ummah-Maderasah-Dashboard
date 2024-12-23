import axios from "axios";

const deleteOutput = (urlPath) => {
  return axios
    .delete(`${import.meta.env.VITE_SERVER}/${urlPath}`)
    .then((response) => response.data)
    .catch((err) => err);
};
export default deleteOutput;
