function saveFavoritesLocal() {
  // guardo los favoritos en localStorage para mantenerlos al recargar
  //los convierto en string porque son array
  localStorage.setItem("seriesFav", JSON.stringify(favSeriesData));
}

function getFavoritesLocal() {
  if (localStorage.getItem("seriesFav") !== null) {
    // recupero los favoritos del localStorage
    //los convierto en array porque son string
    favSeriesData = JSON.parse(localStorage.getItem("seriesFav"));
    renderFavoriteSeries(); //activar cuando funcione renderFav
  }
}

getFavoritesLocal();
