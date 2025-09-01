// ---------- COLLEGE DATA ---------- //
const colleges = [
  { name: "IIT Bombay", location: "Mumbai, Maharashtra", courses: "Engineering, Technology, Science" },
  { name: "Delhi University", location: "New Delhi", courses: "Arts, Commerce, Law, Science" },
  { name: "IIM Ahmedabad", location: "Ahmedabad, Gujarat", courses: "Business, Management, Economics" },
  { name: "NIFT Delhi", location: "New Delhi", courses: "Fashion, Design, Technology" },
  { name: "AIIMS Delhi", location: "New Delhi", courses: "Medicine, Nursing, Biotechnology" }
];

// ---------- DOM ELEMENTS ---------- //
const collegeList = document.getElementById("college-list");
const searchInput = document.getElementById("college-search");

// ---------- FUNCTIONS ---------- //

// Render list of colleges
function renderColleges(list) {
  collegeList.innerHTML = "";
  list.forEach(college => {
    const card = document.createElement("div");
    card.classList.add("college-card");
    card.innerHTML = `
      <h3>${college.name}</h3>
      <p><strong>Location:</strong> ${college.location}</p>
      <p><strong>Courses:</strong> ${college.courses}</p>
    `;
    collegeList.appendChild(card);
  });
}

// ---------- INITIAL LOAD ---------- //
renderColleges(colleges);

// ---------- SEARCH FUNCTIONALITY ---------- //
searchInput.addEventListener("input", function () {
  const query = searchInput.value.toLowerCase();
  const filtered = colleges.filter(c =>
    c.name.toLowerCase().includes(query) ||
    c.location.toLowerCase().includes(query) ||
    c.courses.toLowerCase().includes(query)
  );
  renderColleges(filtered);
});
