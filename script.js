let subjects = [];

// Add Subject
document.getElementById("addSubjectForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const subject = {
    code: document.getElementById("subjectCode").value,
    name: document.getElementById("subjectName").value,
    semester: document.getElementById("semester").value,
    year: document.getElementById("year").value,
    degree: document.getElementById("degree").value,
    teacher: document.getElementById("assignTeacher").value,
    group: document.getElementById("studentGroup").value,
  };

  subjects.push(subject);
  displaySubjects(subjects);
  this.reset();
});

// Search Subjects
document.getElementById("searchSubjectForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const year = document.getElementById("searchYear").value.toLowerCase();
  const degree = document.getElementById("searchDegree").value.toLowerCase();
  const teacher = document.getElementById("searchTeacher").value.toLowerCase();

  const filtered = subjects.filter(s =>
    (year === "" || s.year.toLowerCase() === year) &&
    (degree === "" || s.degree.toLowerCase() === degree) &&
    (teacher === "" || s.teacher.toLowerCase().includes(teacher))
  );

  displaySubjects(filtered);
});

// Display Subjects
function displaySubjects(list) {
  const tbody = document.querySelector("#subjectTable tbody");
  tbody.innerHTML = "";
  list.forEach(sub => {
    const row = `<tr>
      <td>${sub.code}</td>
      <td>${sub.name}</td>
      <td>${sub.semester}</td>
      <td>${sub.year}</td>
      <td>${sub.degree}</td>
      <td>${sub.teacher}</td>
      <td>${sub.group}</td>
    </tr>`;
    tbody.innerHTML += row;
  });
}
