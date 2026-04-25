async function analyze() {
  const fileInput = document.getElementById("resume");
  const jd = document.getElementById("jd").value;

  if (!fileInput.files[0] || !jd) {
    alert("Please upload resume and enter job description");
    return;
  }

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);
  formData.append("job_description", jd);

  const res = await fetch("http://127.0.0.1:8000/analyze", {
    method: "POST",
    body: formData
  });

  const data = await res.json();

  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").innerText = data.score;

  document.getElementById("progress-bar").style.width = data.score + "%";

  const keywordsList = document.getElementById("keywords");
  keywordsList.innerHTML = "";

  data.missing_keywords.forEach(k => {
    const li = document.createElement("li");
    li.innerText = k;
    keywordsList.appendChild(li);
  });
}