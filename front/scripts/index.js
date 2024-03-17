// main

import { fetchData } from './dataFetch.js';
import { renderMovies } from './renderCards.js';

$(document).ready(function() {
  const apiUrl = "https://students-api.up.railway.app/movies";

  fetchData(apiUrl, renderMovies, console.error);
});
