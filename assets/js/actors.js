"use strict";
const cardsContainer = document.getElementById("cards-container");

const HTMLCollectionActors = actors
  .filter((actor) => actor.name || actor.photo)
  .map((actor) => createActorsCard(actor));

function createActorsCard(actor) {
  const { id, name, birthdate, photo } = actor;

  const cardName = createElement(
    "h2",
    { classNames: ["card-name"] },
    document.createTextNode(name || "Anonim")
  );

  const cardInfo = createElement(
    "p",
    { classNames: ["card-info"] },
    document.createTextNode(birthdate)
  );

  const createWrapperPhoto = createElement(
    "div",
    {
      classNames: ["card-photo-wrapper"],
      attributes: { id: `photo-wrapper${actor.id}` },
    },
    createInitials(actor)
  );

  const cardContainer = createElement(
    "article",
    { classNames: ["card-container"] },
    createWrapperPhoto,
    cardName,
    cardInfo
  );
  createImage(actor);

  const HTMLCard = createElement(
    "li",
    { classNames: ["card-wrapper"] },
    cardContainer
  );

  return HTMLCard;
}

cardsContainer.append(...HTMLCollectionActors);
/* Creaters */

function createElement(tag, { classNames = [], attributes = {} ,events={}}, ...children) {
  const element = document.createElement(tag);
  if (classNames.length) {
    element.classList.add(...classNames);
  }
  for (const [nameAttr, valueAttr] of Object.entries(attributes)) {
    element.setAttribute(nameAttr, valueAttr);
  }
  element.append(...children);
  return element;
}

function createInitials({ name }) {
  const cardInitials = document.createElement("div");
  cardInitials.classList.add("card-initials");
  cardInitials.style.backgroundColor = stringToColour(name || "Anonim");
  cardInitials.append(document.createTextNode(name[0] || "NN"));
  return cardInitials;
}

function createImage({ photo, id, name }) {
  const cardPhoto = document.createElement("img");
  cardPhoto.classList.add("card-photo");
  cardPhoto.setAttribute("src", photo);
  cardPhoto.setAttribute("alt", name || "Anonim");
  cardPhoto.dataset.wrapperId = `photo-wrapper${id}`;
  cardPhoto.addEventListener("error", handlePhotoError);
  cardPhoto.addEventListener("load", handlePhotoLoad);
  return cardPhoto;
}

/* Handles */
function handlePhotoError({ target }) {
  target.remove();
}
function handlePhotoLoad({ target }) {
  document.getElementById(target.dataset.wrapperId).append(target);
}
/* Tooltips */
function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).slice(-2);
  }
  return colour;
}


{/* <section id="actors">
<h1 class="actors-heading">actors</h1>
<ul class="cards-container" id="cards-container">
  <!-- <li class="card-wrapper">
    <article class="card-container">
      <img class="card-photo"
        src="https://www.filmibeat.com/img/popcorn/profile_photos/tom-cruise-20190610151455-4602.jpg"
        alt="Tom Cruise">
      <div class="card-photo-wrapper">
        <div class="card-initials">TC</div>
        <img class="card-photo"
          src="https://www.filmibeat.com/img/popcorn/profile_photos/tom-cruise-20190610151455-4602.jpg"
          alt="Tom Cruise" />
      </div>
      <h2 class="card-name">tom cruise</h2>
      <p class="card-info">july 3, 1962</p>
      <p class="card-info">july 3, 1962</p>
    </article>
  </li> -->
</ul>
</section> */}