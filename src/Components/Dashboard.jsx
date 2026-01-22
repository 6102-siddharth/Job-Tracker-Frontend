import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "https://job-tracker-backend-56f8.onrender.com";

export default function Dashboard() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/applications`)
      .then(res => setApps(res.data));
  }, []);

  return (
    <div>
      <h2>Applications</h2>
      {apps.map(a => (
        <div key={a.id}>{a.title} - {a.status}</div>
      ))}
    </div>
  );
}
