const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "India"// Add more countries here
    ];

function search() {
 const input = document.getElementById("destinationCountry");
 const keyword = input.value.toLowerCase();
 const searchResults = document.getElementById("searchResults");
 searchResults.innerHTML = "";

 // Perform search
 const matches = countries.filter(country => country.toLowerCase().includes(keyword));
 
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
 