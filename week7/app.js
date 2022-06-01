const requestChar = (endPathway) => {
    return new Promise((resolve, reject) => {
        axios.get(endPathway)
        .then(res => resolve(res.data.results))
        .catch(err => reject(err))
    }) 
};

const initiate = () => {
    let endPathway = '';
    let pathway = `https://www.swapi.tech/api/people?page=$&limit=10`;
    let pendingPathways = [];
    for (let i = 1; i < 2; i++){
        endPathway = pathway + i;
        pendingPathways.push(requestChar(endPathway))
    };

    Promise.all(pendingPathways)
    .then(data => { 
        let organizedData = data.flat();
        displayChars(organizedData);
    })

};

initiate();

let favCharacter;

const displayChars = (organizedData) => {
    let container = document.querySelector('.characters');
    organizedData.forEach(character => {

        let characterSlot = document.createElement('div');
        characterSlot.classList.add('char-div');

        let innerCharacterSlot = document.createElement('div');
        innerCharacterSlot.classList.add('inner-char-div');
        characterSlot.appendChild(innerCharacterSlot);

        let characterName = document.createElement('div');
        characterName.id = 'actual-character';
        characterName.innerHTML = character.name
        innerCharacterSlot.appendChild(characterName);

        favCharacter = document.createElement('button');
        favCharacter.innerHTML = 'Like';
        favCharacter.classList.add('fav-button');
        favCharacter.id = character.url;
        favCharacter.addEventListener('click', addFavoriteCharacter);
        characterName.appendChild(favCharacter);

        container.append(characterSlot);
    })
};

const addFavoriteCharacter = async (e) => {
    const favCharacterUrl = e.target.id;
    const favCharacterData = await axios.get(favCharacterUrl)
        .then(res => {
            let newFavorite = res.data.result.properties.name;

            let addNewFavoriteCharacter = {
                name: newFavorite
            };

            axios.post('http://api.bryanuniversity.edu/kr/list/', addNewFavoriteCharacter)
                .then(res => getFavoriteChars(res))
                .catch(err => console.warn(err))
        })
        .catch(err => console.log(err))
};

const getFavoriteChars = () => {
    axios.get('http://api.bryanuniversity.edu/kr/list/')
        .then(response => displayFavoriteItems(response))
        .catch(error => console.log(error))
};

getFavoriteChars();

const displayFavoriteItems = (response) => {
    let list = response.data;
    let favorites = document.querySelector('.fav-list');
    favorites.innerHTML = '';
    list.forEach(item => {
        let listItem = document.createElement('h2');
        listItem.innerHTML = item.name;
        listItem.classList.add('favorite-item');

        let deleteFavorite = document.createElement('button');
        deleteFavorite.innerHTML = 'Remove';
        deleteFavorite.classList.add('delete-button');
        deleteFavorite.id = item._id;

        listItem.appendChild(deleteFavorite);
        deleteFavorite.addEventListener('click', deleteFavoriteItems);
        favorites.appendChild(listItem);
        

    });
};

const deleteFavoriteItems = (event) => {
    let favoriteItemId = event.target.id;

    axios.delete(`http://api.bryanuniversity.edu/kr/list/${favoriteItemId}`)
        .then( () => getFavoriteChars())
        .catch(error => console.warn(error))
};

const searchBar = () => {
    let userInput = document.getElementById('search-input').value;
    let addNewFavoriteCharacter = {
        name: userInput
    };
    axios.post('http://api.bryanuniversity.edu/kr/list/', addNewFavoriteCharacter)
        .then(res => getFavoriteChars(res))
        .catch(err => console.warn(err))   
}


document.querySelector('.search-button').addEventListener('click', searchBar)