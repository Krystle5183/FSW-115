axios.get("http://api.bryanuniversity.edu/krystle5183/list")
    .then(response => {

    for(let i = 0; i < response.data.length; i++) {

        const newDiv = document.createElement("div")
        document.body.appendChild(newDiv)

        const newInputBox = document.createElement("input")
        newInputBox.setAttribute("type","checkbox")
        newDiv.appendChild(newInputBox)

        const newLabel = document.createElement("label")
        newLabel.textContent = response.data[i].title
        newDiv.appendChild(newLabel)

        const newP1 = document.createElement("p")
        newP1.textContent = "Description: " + response.data[i].description
        newDiv.appendChild(newP1)

        const newP2 = document.createElement("p")
        newP2.textContent = "Price: " + response.data[i].price
        newDiv.appendChild(newP2)

        if (response.data[i].completed === true) {
            newLabel.style.textDecoration = 'line-through'
        }
          
    }
})   

.catch()
