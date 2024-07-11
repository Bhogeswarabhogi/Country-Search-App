document.getElementById("search-btn").addEventListener("click", function(){
    let input = document.getElementById("search").value;
    let result = document.getElementById("result");
    result.innerHTML = "";
    fetch(`https://restcountries.com/v3.1/name/${input}`)
    .then(res => res.json())
    .then(data => {
        data.forEach(country => {
            let div = document.createElement("div");
            div.classList.add("country");
            div.innerHTML = ``;
            let name = document.createElement("h2");
            name.innerText = country.name.common;
            let capital = document.createElement("p");
            capital.innerText = `Capital: ${country.capital}`;
            let region = document.createElement("p");
            region.innerText = `Region: ${country.region}`;
            let population = document.createElement("p");
            population.innerText = `Population: ${country.population}`;
            let flag = document.createElement("img");
            flag.src = country.flags.png;
            div.appendChild(name);
            div.appendChild(capital);
            div.appendChild(region);
            div.appendChild(population);
            div.appendChild(flag);
            result.appendChild(div);
        });
    })
})