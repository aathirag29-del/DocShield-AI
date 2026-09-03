import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const uploadDocument = (file) => {
  const formData = new FormData();
  formData.append("file", file);

  return api.post("/upload", formData);
};

export default api;