"use strict";
const cardsContainer = document.getElementById("cards-container");
const HTMLCollectionActors = actors.map((actor) => createActorsCard(actor));

function createActorsCard(actor) {
  const HTMLCard = document.createElement("li");
  HTMLCard.classList.add("card-wrapper");

  const cardContainer = document.createElement("article");
  cardContainer.classList.add("card-container");

  

 

  return HTMLCard;
}
cardsContainer.append(...HTMLCollectionActors)