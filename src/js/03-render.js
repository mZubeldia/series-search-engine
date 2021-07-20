function renderSeries() {
  // recoge la información de data y la guarda en una variable resultListElement
  // pinto los resultados de la búsqueda del usuario
  let resultListElement = ""; // variable vacía para almacenar datos que más tarde irán al HTML

  for (const serie of seriesData) {
    // asigna la clase fav-serie si la serie está en mi listado de favoritos, si no, pinta las etiquetas HTML normales
    const alreadyFav = favSeriesData.find((favSerie) => {
      return favSerie.show.id === serie.show.id;
    });
    if (alreadyFav === undefined) {
      resultListElement += `<li class="serie-item" data-id=${serie.show.id}><h3 class="serie-title">${serie.show.name}</h3>`;
    } else {
      resultListElement += `<li class="serie-item fav-serie" data-id=${serie.show.id}><h3 class="serie-title">${serie.show.name}<span class="heart-emoji"> ❤️</span></h3>`;
    }
    if (serie.show.image === null) {
      resultListElement += `<img class="serie-img" src="${emptyImageURL}">`;
    } else {
      resultListElement += `<img class="serie-img" src="${serie.show.image.medium}">`;
    }
    resultListElement += `</li>`;
  }

  searchResultList.innerHTML = resultListElement;
  addListenersToSeries();
  addListenersToFav();
}

function renderFavoriteSeries() {
  let resultFavListElement = ""; // variable vacía para almacenar datos que más tarde irán al HTML

  for (const serieFav of favSeriesData) {
    //pinta las favoritas en la parte izq de la pantalla
    resultFavListElement += `<li class="fav-serie-item"><h3 class="serie-title">${serieFav.show.name}</h3>`;
    if (serieFav.show.image === null) {
      resultFavListElement += `<img class="serie-img" src="${emptyImageURL}">`;
    } else {
      resultFavListElement += `<img class="serie-img" src="${serieFav.show.image.medium}">`;
    }
    resultFavListElement += `<button class="js-fav-listener btn-fav" data-id=${serieFav.show.id}>X</button>`;
    resultFavListElement += `</li>`;
  }

  favResultList.innerHTML = resultFavListElement;
  addListenersToSeries();
  addListenersToFav();
}
