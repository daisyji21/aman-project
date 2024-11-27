// Switch between pages
function showPage(page) {
    document.querySelectorAll("section").forEach((section) => {
        section.style.display = "none";
    });
    document.getElementById(page).style.display = "block";
}

// Handle booking form
const studentData = JSON.parse(localStorage.getItem("students")) || [];
const bookingForm = document.getElementById("bookingForm");
const studentTable = document.getElementById("studentTable");

if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const studentId = document.getElementById("studentId").value;
        const room = document.getElementById("room").value;

        studentData.push({ name, studentId, room });
        localStorage.setItem("students", JSON.stringify(studentData));

        alert("Booking successful!");
        bookingForm.reset();
        updateTable();
    });
}

// Update student details table
function updateTable() {
    studentTable.innerHTML = "";
    studentData.forEach((student) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.studentId}</td>
            <td>${student.room}</td>
        `;
        studentTable.appendChild(row);
    });
}

// Initial update for the table
updateTable();
