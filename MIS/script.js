async function searchCountry() {
    const countryInput = document.getElementById('countryInput').value;
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryInput}`);
    const data = await response.json();
    displayCountryData(data);
}

function displayCountryData(data) {
    const countryDataElement = document.getElementById('countryData');
    countryDataElement.innerHTML = '';
    
    data.forEach(country => {
        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');

        const flagImg = document.createElement('img');
        flagImg.src = country.flags.png;
        flagImg.alt = `${country.name.common} Flag`;

        const countryName = document.createElement('h2');
        countryName.textContent = country.name.common;

        const capital = document.createElement('p');
        capital.textContent = `Capital: ${country.capital}`;

        const population = document.createElement('p');
        population.textContent = `Population: ${country.population}`;

        const moreDetailsButton = document.createElement('button');
        moreDetailsButton.textContent = 'More Details';
        moreDetailsButton.addEventListener('click', () => showMoreDetails(country));

        countryCard.appendChild(flagImg);
        countryCard.appendChild(countryName);
        countryCard.appendChild(capital);
        countryCard.appendChild(population);
        countryCard.appendChild(moreDetailsButton);

        countryDataElement.appendChild(countryCard);
    });
}

function showMoreDetails(country) {
    alert(`Weather data for ${country.name.common} can be fetched using weather API.`);
    // You can fetch weather data using weather API here
}
