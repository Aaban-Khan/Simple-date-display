let year = document.querySelector(".year");
let month = document.querySelector(".month");
let day = document.querySelector(".day");
let date = document.querySelector(".date");

window.addEventListener("DOMContentLoaded", () => {
  let funcDate = new Date();
  year.textContent = funcDate.getFullYear();
  month.textContent = funcDate.toLocaleDateString("en-in", { month: "long" });
  day.textContent = funcDate.toLocaleDateString("en-US", { weekday: "long" });
  date.textContent = funcDate.getDate();
});
