const getData = () => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
        for (let x=0; x < 10; x++){
            const h3 = document.createElement("h3")
            h3.textContent = res.data.results[x].name
            document.getElementById("container").appendChild(h3)
        }
    })
    .catch(err => console.log(err))
}


const rickmortyButton = document.getElementById("rmbutton");
rickmortyButton.addEventListener('click', getData);

