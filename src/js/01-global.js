"use strict";

const formElement = document.querySelector(".js-form");
const searchButton = document.querySelector(".js-btn");
const inputElement = document.querySelector(".js-input");
const searchResultList = document.querySelector(".js-result");
const favResultList = document.querySelector(".js-fav");

let emptyImageURL =
  "https://via.placeholder.com/210x295/ffffff/666666/?text=TV";
let seriesData = []; // array vacío con los data del API
let favSeriesData = []; // array vacío con las series fav del user
