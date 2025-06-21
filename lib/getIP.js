import axios from "axios";
async function getIpAddress() {
  try {
    const response = await axios.get("https://api.ipify.org/?format=json");
    return response.data.ip;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export default getIpAddress;
