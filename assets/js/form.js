"use strict";
const form = document.getElementById("form");
const messagessContaimer = document.getElementById("messagess");

form.addEventListener("submit", formHandler);
function formHandler(e) {
  e.preventDefault();
  const textValue = e.target.text.value;

  const pElem = createElement(
    "p",
    { events: { click: messageHanldeClick } },
    textValue
  );
  const btnDelete = createElement(
    "button",
    { events: { click: btnDeleteHandler.bind(pElem) } },
    "x",
    
  );
  pElem.append(btnDelete)
  messagessContaimer.append(pElem);
  console.log(textValue);
}
function btnDeleteHandler() {
  this.remove();
}

function messageHanldeClick({ target }) {
  target.style.color = "red";
}

function createElement(
  tag,
  { classNames = [], attributes = {}, events = {} },
  ...children
) {
  const element = document.createElement(tag);
  if (classNames.length) {
    element.classList.add(...classNames);
  }
  for (const [nameAttr, valueAttr] of Object.entries(attributes)) {
    element.setAttribute(nameAttr, valueAttr);
  }
  for (const [typeEvent, handlEvent] of Object.entries(events)) {
    element.addEventListener(typeEvent, handlEvent);
  }
  element.append(...children);
  return element;
}
