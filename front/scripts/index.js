// main

import { fetchData } from './dataFetch.js';
import { renderMovies } from './renderCards.js';

$(document).ready(function() {
  const apiUrl = "http://localhost:3000";

  fetchData(apiUrl, renderMovies, console.error);
});
