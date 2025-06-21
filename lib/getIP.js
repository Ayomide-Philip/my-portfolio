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

async function getLocation(ip) {
  try {
    const response = await axios.get(
      `https://get.geojs.io/v1/ip/geo/${ip}.json`
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
export { getLocation };
export default getIpAddress;
