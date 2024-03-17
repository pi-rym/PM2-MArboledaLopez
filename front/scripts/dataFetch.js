// data fetch module

const fetchData = function(url, successCallback, errorCallback) {
    $.get(url, function(data) {
      if (Array.isArray(data)) {
        successCallback(data);
      } else {
        errorCallback("No es un array :/.");
      }
    }).fail(function() {
      errorCallback("No se pudo acceder a los datos de las peliculas.");
    });
  };
  
  export { fetchData };
  