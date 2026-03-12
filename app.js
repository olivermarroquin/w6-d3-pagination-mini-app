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
  statusEl.textContent = "Loading";
  resultsEl.textContent = "";
}

function showMessage(message) {
  statusEl.textContent = message;
}
