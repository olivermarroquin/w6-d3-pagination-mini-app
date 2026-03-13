"use strict";

const statusEl = document.querySelector("#status");
const pageInfoEl = document.querySelector("#page-info");
const resultsEl = document.querySelector("#results");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let currentPage = 1;
let totalItems = 0;
let totalPages = 1;

async function getCharacters(page) {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;
    try {
        const res = await fetch(url)
    } 
    const data = await res.json()
    catch (error) {
        console.error(error)
    }
}