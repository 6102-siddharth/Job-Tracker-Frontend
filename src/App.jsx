import { useState } from "react";
import axios from "axios";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);

  const API_URL = "https://your-backend-name.onrender.com"; 

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); 
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await axios.post(`${API_URL}/upload-resume`, formData);
      setScore(res.data.matchScore);

      
      setFile(null);
      document.getElementById("resumeInput").value = null;

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input
        type="file"
        id="resumeInput"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Upload Resume</button>

      {score !== null && (
        <div>
          <h3>Match Score: {score}%</h3>
          <p>You can upload another resume now.</p>
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;
































// import { useEffect, useState } from "react";
// import axios from "axios";
// import JobCard from "../src/Components/JobCard.jsx";
// import ResumeUpload from "../src/Components/ResumeUpload.jsx";
// import Dashboard from "../src/Components/Dashboard.jsx";
// const API_URL = "https://job-tracker-backend-56f8.onrender.com";


// export default function App() {
//   const [jobs, setJobs] = useState([]);
//   const [resume, setResume] = useState("");

//   useEffect(() => {
//     axios.get(`${API_URL}/jobs`).then(res => setJobs(res.data));
//     axios.get(`${API_URL}/resume`)
//     .then(res => setResume(res.data.resumeText))
//     .catch(err => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1>AI Job Tracker</h1>
//       {!resume && <ResumeUpload />}
//       {jobs.map(job => (
//         <JobCard key={job.id} job={job} resume={resume} />
//       ))}
//       <Dashboard />
//     </div>
//   );
// }
