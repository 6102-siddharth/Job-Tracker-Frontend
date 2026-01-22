import { useState } from "react";
import axios from "axios";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [score, setScore] = useState(null);

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
          <p>You can upload another resume now</p>
        </div>
      )}
    </div>
  );
}

export default ResumeUpload;
























// import axios from "axios";
// const API_URL = "https://job-tracker-backend-56f8.onrender.com";

// export default function ResumeUpload() {
//   const upload = async e => {
//     const form = new FormData();
//     form.append("resume", e.target.files[0]);
//     await axios.post(`${API_URL}/upload-resume`, form);
//     alert("Resume uploaded");
//     window.location.reload();
//   };

//   return <input type="file" onChange={upload} />;
// }
