import axios from "axios";

const updateDataByPut = async (urlPath, payload) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_SERVER}/${urlPath}`,
      payload
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export default updateDataByPut;
