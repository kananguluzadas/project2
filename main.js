
const loadCountryAPI = () =>{
    // fetch url of rest country from website
    fetch("https://countryapi.io/api/all?apikey=ar1XHaNkSLhovx5z2RXXmz6sKfNSmDhg25fM2Wxs")
    .then(res => res.json())
    .then(data => displayCountries(Object.values(data)))
}

// displaying all countries
const displayCountries = countries =>{
    // console.log(countries);
    const countriesInner = countries.map(country => getCountry(country));

    // displaying div to html
    const container = document.querySelector('div');
    container.style.gap = "3.25rem";
    container.style.display = "grid";

    container.innerHTML = countriesInner.join(' ');
}

// get data and set it to html
const getCountry = (country) =>{
    console.log(country)
    return `
        <div class="country-div">
            
                <img src="${country.flag.large}">
           
            <h2>${country.name}</h2>
            <hr>
            <h4>Population: ${country.population}</h4>
            <h4>Currency: ${Object.keys(country.currencies)}</h4>
            <h4>Capital: ${country.capital}</h4>
        </div>
    `
}
// call the funtion to get output in console
loadCountryAPI()
