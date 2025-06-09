import axios from "axios";

const WWW_URL =
  "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft";

export const fetchSkips = async () => {
  try {
    const response = await axios.get(WWW_URL);
    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};
