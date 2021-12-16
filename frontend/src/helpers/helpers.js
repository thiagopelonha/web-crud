// Importing axios to create requests to my API
import axios from "axios";
const baseURL = "http://localhost:3000/tasks/";

// function to handle Errors on API
// receives our success functions but if
// there are any problem, it will run
const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((error) => {
      console.error(error);
    });

// Exporting my functions to use in my templates
export const api = {
  gettask: handleError(async (id) => {
    const res = await axios.get(baseURL + id);
    return res.data;
  }),
  gettasks: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  deletetask: handleError(async (id) => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createtask: handleError(async (payload) => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updatetask: handleError(async (payload) => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  }),
};
