import { useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState("");
  const [requestData, setRequestData] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("/api/pass", {
      data: data,
    });

    if (!response?.data?.status) return;

    setStatus(response.data.status);
    const match = new RegExp("\\\\", "g");
    setRequestData(JSON.stringify(response.config.data).replace(match, ""));
  };

  return (
    <div className={styles.form__container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="data__input">Data to post:</label>
        <input
          type="text"
          name="data__input"
          onChange={(e) => setData(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <div className={styles.details__wrapper}>
        <details>
          <summary className={styles.summary}>Response</summary>
          <a target="_blank" href={status} className={styles.link}>
            {status ? status : "None 🤷‍♂️"}
          </a>
        </details>
        <details>
          <summary className={styles.summary}>Request</summary>
          <p align="center" style={{ color: "green" }}>
            {requestData ? requestData : "🤷‍♂️"}
          </p>
        </details>
      </div>
    </div>
  );
}
