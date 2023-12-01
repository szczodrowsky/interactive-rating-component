const rating_section = document.querySelector(".rating-container");
const submit_section = document.querySelector(".submit-container");
const button = document.querySelectorAll(".btn");
const submitBtn = document.querySelector(".submit");
const sumbittedAnserw = document.getElementById("submit-number");

button.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.value);
    let anserw = e.target.value;
    sumbittedAnserw.textContent = anserw;
  });
});

submitBtn.addEventListener("click", () => {
  rating_section.classList.add("hidden");
  submit_section.classList.remove("hidden");
});
