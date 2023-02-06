let currentPage = 1;


function getCharacters(page) {
fetch(`https://swapi.dev/api/people/?page=${page}`)
.then(response => response.json())
.then(data => {

document.getElementById("characters").innerHTML = "";
 for (let i = 0; i < data.results.length; i++) {
    const li = document.createElement("li");
    li.className = "character-name"
    li.innerHTML = data.results[i].name;
    document.getElementById("characters").appendChild(li);
  }
});
}

document.querySelector(".return-btn").addEventListener("click", () => {
currentPage--;
getCharacters(currentPage);
});

document.querySelector(".advance-btn").addEventListener("click", () => {
currentPage++;
getCharacters(currentPage);
});

getCharacters(currentPage);