"use strict";
const messages = [];
const form = document.getElementById("form");
const messagessContaimer = document.getElementById("messagess");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const testValue = e.target.text.value.trim();
  const pattern = /^[A-Z][a-z]{2,12} [A-Z][a-z]{2,12}\.$/;
  if (!messages.includes(testValue)&&pattern.test(testValue)) {
    messages.push(testValue);
    messagessContaimer.append(
      createElement("p", { events: { click: handlClick } }, testValue)
    );
  }
  form.reset();
});

function handlClick({ target }) {
  target.style.backgroundColor = "red";
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
