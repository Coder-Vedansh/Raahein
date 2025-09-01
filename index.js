// Stream Data
const streams = {
  science: [
    { title: "Courses", desc: "Explore degree options such as B.Sc., B.Tech., M.Sc." },
    { title: "Exams", desc: "Prepare for exams like JEE, NEET, and CUET to pursue higher studies in Science" },
    { title: "Career Options", desc: "Find the right career – Doctor, Engineer, Scientist, Analyst" }
  ],
  commerce: [
    { title: "Courses", desc: "Explore degree options after Commerce such as B.Com." },
    { title: "Exams", desc: "Prepare for exams like CA, CS, and CMA." },
    { title: "Career Options", desc: "Banking, accounting, finance, and management roles" }
  ],
  humanities: [
    { title: "Courses", desc: "Explore degree options like BA, BBA, and Fine Arts." },
    { title: "Exams", desc: "Prepare for exams like CUET, CLAT, and UPSC" },
    { title: "Career Options", desc: "Lawyer, Journalist, Designer, Civil Servant" }
  ]
};

// DOM Elements
const streamBtns = document.querySelectorAll(".stream-btn");
const detailsSection = document.getElementById("details");
const streamTitle = document.getElementById("stream-title");
const streamOptions = document.getElementById("stream-options");

// Event Listener for Stream Selection
streamBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedStream = btn.dataset.stream;
    showStreamDetails(selectedStream);
  });
});

// Function to Show Stream Details
function showStreamDetails(stream) {
  streamTitle.textContent = stream.charAt(0).toUpperCase() + stream.slice(1);
  streamOptions.innerHTML = "";

  streams[stream].forEach(opt => {
    const card = document.createElement("div");
    card.classList.add("option-card");
    card.innerHTML = `<h3>${opt.title}</h3><p>${opt.desc}</p>`;
    streamOptions.appendChild(card);
  });

  detailsSection.classList.remove("hidden");
}
