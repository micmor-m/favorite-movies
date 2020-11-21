const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById("backdrop");
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
// const userInput = addMovieModal.getElementsByTagName("input");
const userInputs = addMovieModal.querySelectorAll("input");
const entryTextSection = document.querySelector("#entry-text");
const moviesList = document.querySelector("#movie-list");

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}">
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
</div>`;

  const listRoot = document.getElementById("movie-list");
  listRoot.appendChild(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = null;
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid values (rating between 1 and 5).");
    return;
  }

  newMovie = {
    title: titleValue,
    imageUrl: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);

  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieElement(newMovie.title, newMovie.imageUrl, newMovie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
