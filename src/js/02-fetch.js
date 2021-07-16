function handleBtn(ev) {
  ev.preventDefault();
  fetch("//api.tvmaze.com/search/shows?q=" + inputElement.value)
    .then((response) => response.json())
    .then((data) => {
      seriesData = data;

      renderSeries();
      renderFavoriteSeries();
    });
}
searchButton.addEventListener("click", handleBtn);
