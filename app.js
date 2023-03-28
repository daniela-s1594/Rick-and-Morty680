const txtCharacter = document.getElementById("txt-character");
const containerCard = document.getElementById("containerCards");
const createCard = (character) => {
  const card = document.createElement("div");
  card.classList.add("card-character");

  const imgCard = document.createElement("img");
  imgCard.src = character.image;
  imgCard.alt = character.name;

  const containerDescription = document.createElement("div");
  containerDescription.classList.add("description-card");
};
/*
<div id="containerCards" class="container-cards">
      <div class="card-character">
        <img src="img-card.webp.jpg" alt="img-card">
        <div class="description-card">
          <h2>Rick and morty</h2>
          <p>Gender: Male</p>
        </div>
      </div>
    </div>
*/
