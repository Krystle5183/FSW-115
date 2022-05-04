let xhr = new XMLHttpRequest()

xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/', true);
xhr.send();
xhr.onreadystatechange = function(){;
    if(xhr.readyState === 4 && xhr.status === 200){;
        console.log(xhr.responseText);
        let data = JSON.parse(xhr.responseText);
        pokeData(data.results);
    } else if (xhr.readyState === 4 && xhr.status !==200){;
        console.log(xhr.responseText);
    };
};

function pokeData(data){;
    console.log(data);
    for (let x = 0; x < data.length; x++){;
    const pokemonContent = document.createElement("h3");
    pokemonContent.textContent = `Pokemon Name: ${data[x].name} || Pokemon URL: ${data[x].url}`;
    document.body.appendChild(pokemonContent);
    };
};