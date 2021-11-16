const API = "https://rickandmortyapi.com/api/character";

const btnSearch = document.getElementById("btnSearch");

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      

      fillData(json);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

const fillData = (json) => {
  let html = "";

  json.results.forEach((pp) => {
    html += '<div class="col">';
    html += '<div class="card h-100">';
    html += `<h2 class="card-title">${pp.name}</h2>`;
    html += '<div class="card-body">';
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("dataPeople").innerHTML = html;
};

btnSearch.onclick = function () {
  getData(API);
};
