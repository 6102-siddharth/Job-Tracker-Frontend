import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../src/Components/JobCard.jsx";
import ResumeUpload from "../src/Components/ResumeUpload.jsx";
import Dashboard from "../src/Components/Dashboard.jsx";

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [resume, setResume] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/jobs").then(res => setJobs(res.data));
    axios.get("http://localhost:5000/resume")
    .then(res => setResume(res.data.resumeText))
    .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>AI Job Tracker</h1>
      {!resume && <ResumeUpload />}
      {jobs.map(job => (
        <JobCard key={job.id} job={job} resume={resume} />
      ))}
      <Dashboard />
    </div>
  );
}
