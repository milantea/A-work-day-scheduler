let hourlyTasks = document.querySelector("tasks");
let saveEntries = document.querySelector("#saveBtn");
let saveTimeEntries = localStorage.getItem("saveBtn");
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
document.querySelector("#currentDay").textContent =
  new Date().toLocaleDateString(options);

const saveTasks = (e) => {
  e.preventDefault();
  console.log(e);
  console.log(this);
};
