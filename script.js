const form = document.getElementById("ageForm");
const resetBtn = document.getElementById("resetBtn");
const resultSection = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);

  resultSection.innerHTML = "";

  if (!day || !month || !year) {
    resultSection.innerHTML = `<div class="alert alert-danger">Please fill all fields</div>`;
    return;
  }

  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  if (birthDate > today) {
    resultSection.innerHTML = `<div class="alert alert-danger">Date cannot be in the future</div>`;
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    days += lastMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const totalDays = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalHours = totalDays * 24;

  resultSection.innerHTML = `
  <div class="card mt-4 p-4 text-center shadow">
    <h4>Your Age</h4>

    <div class="row mt-3">
      <div class="col">
        <h2>${years}</h2>
        <small>Years</small>
      </div>

      <div class="col">
        <h2>${months}</h2>
        <small>Months</small>
      </div>

      <div class="col">
        <h2>${days}</h2>
        <small>Days</small>
      </div>
    </div>

    <hr>

    <p>Total Days: <b>${totalDays}</b></p>
    <p>Total Weeks: <b>${totalWeeks}</b></p>
    <p>Total Hours: <b>${totalHours}</b></p>
  </div>
  `;
});

resetBtn.addEventListener("click", () => {
  form.reset();
  resultSection.innerHTML = "";
});