"use strict";

//TODO Grab the elements from the HTML so that I can update them later

const statusEl = document.querySelector("#status");
const pageInfoEl = document.querySelector("#page-info");
const resultsEl = document.querySelector("#results");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

//TODO create state

let currentPage = 1;
let totalItems = 0;
let totalPages = 1;

//TODO add the API fetch function to get the characters

async function getCharacters(page) {
  const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
  const res = await fetch(url);
  if (res.status === 429 || res.status === 403) {
    throw new Error("Rate limit reached. Please wait and try again.");
  }
  if (!res.ok) {
    throw new Error("Something went wrong while loading data.");
  }
  return res.json();
}

function showLoading() {
  statusEl.textContent = "Loading...";
  resultsEl.textContent = "";
}

function showMessage(message) {
  statusEl.textContent = message;
}

function updatePageInfo() {
  pageInfoEl.textContent = `Page: ${currentPage} | Total Items: ${totalItems}`;
}

function updateButtons() {
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

function renderResults(characters) {
  resultsEl.textContent = "";

  for (let i = 0; i < characters.length; i++) {
    const row = document.createElement("div");
    const name = document.createElement("p");
    const img = document.createElement("img");

    name.textContent = characters[i].name;
    img.src = characters[i].image;
    img.alt = characters[i].name;
    img.width = 100;

    row.appendChild(name);
    row.appendChild(img);
    resultsEl.appendChild(row);
  }
}

async function loadPage(page) {
  try {
    showLoading();

    const data = await getCharacters(page);
    console.log(data);

    currentPage = page;
    totalItems = data.info.count;
    totalPages = data.info.pages;

    renderResults(data.results.slice(0, 10));
    updatePageInfo();
    updateButtons();
    showMessage("Loaded successfully.");
  } catch (error) {
    showMessage(error.message);
    console.error(error);
  }
}

async function main() {
  await loadPage(1);
}

main();
