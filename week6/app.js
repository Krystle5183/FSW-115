const getData = async () => {
    let response, starships, filmsOfStarships // Defines variables
    try {
        response = await axios.get('https://swapi.dev/api/people/4') // Gets Darth Vador data
        //console.log(response)

        starships = await axios.get(response.data.starships) // Gets Darth Vador's starship
        //console.log(starships)

        filmsOfStarships = await axios.get(starships.data.films) // Gets fils of Darth Vador's starship
        //console.log(filmsOfStarships)
        display(response, starships, filmsOfStarships) // Passes data to display function
    }
    catch (errors){
        console.log(errors)
    }
}

getData()

function display(response, starships, filmsOfStarships){
    let name = response.data.name;
    let starshipName = starships.data.name;
    let film = filmsOfStarships.data.title;
    let displayDiv = document.querySelector('.display');

    let nameDiv = document.createElement('div');
    nameDiv.innerHTML = 'Name: ' + name;
    nameDiv.setAttribute('class', 'newdiv')
    displayDiv.appendChild(nameDiv);

    let starshipDiv = document.createElement('div');
    starshipDiv.innerHTML = 'Ship Name: ' + starshipName;
    starshipDiv.setAttribute('class', 'newdiv')
    displayDiv.appendChild(starshipDiv);

    let filmDiv = document.createElement('div');
    filmDiv.innerHTML = 'Movies starship was in: ' + film;
    filmDiv.setAttribute('class', 'newdiv')
    displayDiv.appendChild(filmDiv);
}