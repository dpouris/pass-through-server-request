import axios from "axios";

const URL = process.env.SERVER;
const BASE_URLS = [URL, "https://localhost:8000"];

export default async function handler(req, res) {
  const data = req.body.data || "";

  const response = await axios.post(BASE_URLS[0], {
    data: data,
  });
  res.status(200).json({ status: response.data });
}
