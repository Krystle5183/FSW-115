const getData = () => {
    axios.get('https://api.sampleapis.com/simpsons/characters')
    .then(res => {
        for (let x=0; x < 10; x++){
            const h3 = document.createElement("h3")
            h3.textContent = res.data[x].name
            document.getElementById("container").appendChild(h3)
        }
    })
    .catch(err => console.log(err))
}


const simpsonButton = document.getElementById("simpsonButton");
simpsonButton.addEventListener('click', getData);