let jangofett = {
    "name": "Jango Fett",
    "height": "183",
    "mass": "79",
    "hair_color": "black",
    "skin_color": "tan",
    "eye_color": "brown",
    "birth_year": "66BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/53/",
    "films": [
        "https://swapi.dev/api/films/5/"
    ],
    "species": [],
    "vehicles": [],
    "starships": [],
    "created": "2014-12-20T16:54:41.620000Z",
    "edited": "2014-12-20T21:17:50.465000Z",
    "url": "https://swapi.dev/api/people/69/"
};

let display = document.getElementById('para');
let jangofettInfo = JSON.stringify(jangofett);
display.append(jangofettInfo);