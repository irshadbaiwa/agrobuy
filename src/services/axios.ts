import axios from "axios";

const fakeStoreApi = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeoutErrorMessage: "Network Timeout",
  headers: {
    "Content-Type": "application/json",
  },
  validateStatus: (status) => {
    return status >= 200 && status < 300;
  },
});

export default fakeStoreApi;
