const levelBtns = document
  .querySelector(".rating-level")
  .querySelectorAll("button");

const submitBtn = document.querySelector(".submit-btn");

let rating = "";

const handleRate = (e) => {
  if (rating === e.target.dataset.level) {
    e.target.classList.remove("selected");
  } else {
    levelBtns.forEach((button) => {
      button.classList.remove("selected");
    });
    rating = e.target.dataset.level;
    e.target.classList.add("selected");
  }
};

const handleSubmit = () => {
  if (!rating) {
    return;
  }
  const ratingSection = document.querySelector(".section-rating");
  const thankyouSection = document.querySelector(".section-thankyou");

  ratingSection.classList.add("hidden-section");
  thankyouSection.classList.remove("hidden-section");

  const rateSpan = document.querySelector("#rate");
  rateSpan.textContent = rating;
};

levelBtns.forEach((i) => i.addEventListener("click", handleRate));
submitBtn.addEventListener("click", handleSubmit);
