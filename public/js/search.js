// const searchInput = document.getElementById("searchInput");
// const searchButton = document.getElementById("searchButton");
// const cardList = document.getElementById("cardList");

// searchButton.addEventListener("click", searchPokemon);

// function searchPokemon() {
//   const pokemonName = searchInput.value.trim().toLowerCase();

//   if (pokemonName === "") {
//     alert("Please enter a Pokemon name.");
//     return;
//   }

//   fetch(`https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`)
//     .then((response) => response.json())
//     .then((data) => {
//       displayCards(data.data);
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       alert("An error occurred while fetching data.");
//     });
// }

// function displayCards(cards) {
//   cardList.innerHTML = "";

//   if (cards.length === 0) {
//     cardList.innerHTML = "<p>No cards found.</p>";
//     return;
//   }

//   cards.forEach((card) => {
//     const cardElement = document.createElement("div");
//     cardElement.classList.add("card");
//     cardElement.innerHTML = `
//             <img src="${card.images.small}" alt="${card.name}">
//         `;
//     cardList.appendChild(cardElement);
//   });
// }
