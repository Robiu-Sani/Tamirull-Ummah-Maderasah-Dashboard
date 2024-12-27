import axios from "axios";

const PatchData = async (urlPath, payload) => {
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_SERVER}/${urlPath}`,
      payload
    );
    return response.data;
  } catch (err) {
    return err;
  }
};

export default PatchData;
