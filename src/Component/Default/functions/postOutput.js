import axios from "axios";

const postOutput = async (urlPath, payload) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER}/${urlPath}`,
      payload
    );
    console.log(response);
    return response.data;
  } catch (err) {
    return err;
  }
};

export default postOutput;
