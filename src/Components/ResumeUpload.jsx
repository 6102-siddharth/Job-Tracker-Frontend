import axios from "axios";
const API_URL = "https://job-tracker-backend-56f8.onrender.com";

export default function ResumeUpload() {
  const upload = async e => {
    const form = new FormData();
    form.append("resume", e.target.files[0]);
    await axios.post(`${API_URL}/upload-resume`, form);
    alert("Resume uploaded");
    window.location.reload();
  };

  return <input type="file" onChange={upload} />;
}
