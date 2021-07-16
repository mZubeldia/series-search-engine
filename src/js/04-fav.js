function addListenersToSeries() {
  const allSeries = document.querySelectorAll(".serie-item");
  for (const eachSerie of allSeries) {
    eachSerie.addEventListener("click", handleClickSerie);
  }
}

function addListenersToFav() {
  const allFavSeries = document.querySelectorAll(".js-fav-listener");
  for (const eachSerie of allFavSeries) {
    eachSerie.addEventListener("click", handleClickSerie);
  }
}

function handleClickSerie(ev) {
  const clickedSerie = ev.currentTarget; // guardo dónde se ha hecho clic
  const serieId = parseInt(clickedSerie.dataset.id); // guardo el id de donde se ha hecho clic y lo convierto en número

  const alreadyFav = favSeriesData.find((serie) => {
    return serie.show.id === serieId;
  }); // busco en mi array de fav el id del elemento donde se ha hecho click

  if (alreadyFav === undefined) {
    //si series ID no está en mi array de favoritos (por lo que es undefined), añado mi ID al array de favoritos
    const clickedSerieObject = seriesData.find((serie) => {
      return serie.show.id === serieId;
    });
    favSeriesData.push(clickedSerieObject);
  } else {
    favSeriesData = favSeriesData.filter((serie) => {
      return serie.show.id !== serieId;
    });

    // si el ID sí está en mis favoritos, quítalo
    //crea un nuevo array favoritos, machacando el anterior eliminando los id en los que había hecho antes click
  }
  renderSeries();
  renderFavoriteSeries();
  saveFavoritesLocal();
}
