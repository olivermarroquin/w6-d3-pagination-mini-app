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
