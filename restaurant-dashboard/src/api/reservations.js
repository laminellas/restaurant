import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

export const getReservations = async (token) => {
  return axios.get(`${API_URL}/reservations`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
