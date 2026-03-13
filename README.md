# w6-d3-pagination-mini-app

Tiny pagination app for Week 6 Day 3.

## API Chosen

Rick and Morty API

Endpoint used:
`https://rickandmortyapi.com/api/character/?page=1`

## Parameters Used

- page=1
- page=2
- etc.

## Rate-Limit Headers Observed

I did not observe any rate-limit headers during testing.

## Note from Documentation

According to the Rick and Morty API documentation, the "/character" endpoint supports pagination using the "page" query parameter. The response also includes an "info" object that provides the total count of characters and total pages.

{
"info": {
"count": 826,
"pages": 42
}
}

so i used:
totalItems = data.info.count;
totalPages = data.info.pages;
