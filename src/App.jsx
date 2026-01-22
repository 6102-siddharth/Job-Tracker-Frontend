import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "./Components/JobCard.jsx";
import ResumeUpload from "./Components/ResumeUpload.jsx";
import Dashboard from "./Components/Dashboard.jsx";

const API_URL = "https://job-tracker-backend-56f8.onrender.com";

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [resume, setResume] = useState("");

  // Fetch jobs and resume once
  useEffect(() => {
    axios.get(`${API_URL}/jobs`)
      .then(res => setJobs(res.data))
      .catch(err => console.error(err));

    axios.get(`${API_URL}/resume`)
      .then(res => setResume(res.data.resumeText))
      .catch(err => console.error(err));
  }, []);

  // Function to update resume state after upload
  const handleResumeUpload = (newResumeText) => {
    setResume(newResumeText);
  };

  return (
    <div>
      <h1>AI Job Tracker</h1>

      {/* Always show ResumeUpload and pass function to update resume */}
      <ResumeUpload onUpload={handleResumeUpload} />

      {jobs.map(job => (
        <JobCard key={job.id} job={job} resume={resume} />
      ))}

      <Dashboard />
    </div>
  );
}
















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
