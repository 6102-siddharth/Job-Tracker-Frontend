import { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/applications")
      .then(res => setApps(res.data));
  }, []);

  return (
    <div>
      <h2>Applications</h2>
      {apps.map(a => (
        <div key={a.id}>{a.title} – {a.status}</div>
      ))}
    </div>
  );
}
