import axios from "axios";

export default function ResumeUpload() {
  const upload = async e => {
    const form = new FormData();
    form.append("resume", e.target.files[0]);
    await axios.post("http://localhost:5000/upload-resume", form);
    alert("Resume uploaded");
    window.location.reload();
  };

  return <input type="file" onChange={upload} />;
}
