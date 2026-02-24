"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/ping")
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>AcaShop Frontend</h1>
      <p>Respuesta del backend:</p>
      <h2>{message}</h2>
    </main>
  );
}