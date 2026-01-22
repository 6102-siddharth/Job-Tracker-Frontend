import axios from "axios";
import { useEffect, useState } from "react";

export default function JobCard({ job, resume }) {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    if (resume) {
      axios.post("http://localhost:5000/match", {
        resume,
        job: job.description
      }).then(res => setMatch(res.data));
    }
  }, [resume]);


  

  const apply = async () => {
    window.open("job.url", "_blank");// https://example.com
    if (confirm("Did you apply?")) {
      await axios.post("http://localhost:5000/apply", job);
      alert("Application Saved");
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: 10 }}>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      {match && <p>Match Score: {match.score}%</p>}
      <button onClick={apply}>Apply</button>
    </div>
  );
}
