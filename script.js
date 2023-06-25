import countries from "./countries.js";

// variable country_list with an array of all countries
const country_list = countries;
console.log(country_list);


function search() {
 const input = document.getElementById("destinationCountry");
 const keyword = input.value.toLowerCase();
 const searchResults = document.getElementById("searchResults");
 searchResults.innerHTML = "";

 // Perform search
 const matches = country_list.filter(country => country.toLowerCase().includes(keyword));
 
 // Display search results
 if (matches.length > 0) {
   matches.forEach(match => {
     const resultItem = document.createElement("p");
     resultItem.textContent = match;
     searchResults.appendChild(resultItem);
   });
 } else {
   const noResults = document.createElement("p");
   noResults.textContent = "No matching countries found.";
   searchResults.appendChild(noResults);
 }
 
}
 