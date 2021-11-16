const API = "https://rickandmortyapi.com/api/character";

const getData = (api) => {
  return fetch(api)
    .then((reponse) => reponse.json())
    .then((json) => {
      fillData(json);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

const fillData = (data) => {
  html = "";
  console.log(data);
  data.results.forEach((pr) => {
    console.log(pr.name);

    html += '<div class="col">';
    html += '<div class="card h-100" style="with: 12rem;">';
    html += `<img src="${pr.image}" class="card-img-top" alt="${pr.name}">`;
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pr.name}</h5>`;
    html += "</div>";
    html += "</div>";
    html += "</div>";
  });

  document.getElementById("dataAlbum").innerHTML = html;
};

getData(API);
