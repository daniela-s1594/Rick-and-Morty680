const txtCharacter = document.getElementById("txt-character");
const containerCards = document.getElementById("containerCards");
const createCard = (character) => {
  const card = document.createElement("div");
  card.classList.add("card-character");

  const imgCard = document.createElement("img");
  imgCard.src = character.image;
  imgCard.alt = character.name;

  const containerDescription = document.createElement("div");
  containerDescription.classList.add("description-card");

  const nameCharacter = document.createElement("h2");
  nameCharacter.textContent = character.name;
  const genderCharacter = document.createElement("p");
  genderCharacter.textContent = "Gender: " + character.gender;

  card.appendChild(imgCard);
  card.appendChild(containerDescription);

  containerCards.appendChild(card);
};

