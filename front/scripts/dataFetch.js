// data fetch module

import axios from 'axios';

const fetchData = async function(url, successCallback, errorCallback) {
  try {
    const response = await axios.get(url);
    
    if (Array.isArray(response.data)) {
      successCallback(response.data);
    } else {
      errorCallback("No es un array :/.");
    }
  } catch (error) {
    errorCallback("No se pudo acceder a los datos de las películas.");
  }
};

export { fetchData };
