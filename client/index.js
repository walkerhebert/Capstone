const baseURL = 'http://localhost:4005'

const showRests = document.querySelector('#restaurantDisplay')
const addButton = document.querySelector('#addRest')

const getAllRests = () => {
    axios.get(`${baseURL}/getRests`)
        .then((res) => {
            displayRests(res.data)
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })

}
const displayRests = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        createRestCard(arr[i])
}
}

const createRestCard = (rest) => {
    const restCard = document.createElement('section')
    restCard.classList.add('rest-card')

    //CHANGE LATER
    restCard.innerHTML = `
    <img class="rest-image" src=${rest.picture} alt='rest image' />  
    <p class="rest-name">${rest.name}</p>
    <section id="buttons-container">
        <button class="dislikeBtn" onclick="updateRest(${rest.id}, 'dislike')">Dislike</button>
        Popularity: ${rest.likes}
        <button class="likeBtn" onclick="updateRest(${rest.id}, 'like')">Like</button>
    </section>
    <button class="deleteBtn" onclick="deleteRest(${rest.id})">Delete</button>
    `
    showRests.appendChild(restCard)
}

const deleteRest = (id) => {
    axios.delete(`${baseURL}/deleteRest/${id}`)
        .then((res) => {
            showRests.innerHTML = ''
            displayRests(res.data)
        })
}
const updateRest = (id, type) => {
    axios.put(`${baseURL}/updateLikes/${id}`, {type})
        .then((res) => {
            showRests.innerHTML = ''
            displayRests(res.data)
        })
}

const addRest = () => {
    let nameInput = document.querySelector("#nameInput")
    let imageInput = document.querySelector("#imageInput")

    let newRest = {
        name: nameInput.value,
        picture: imageInput.value
    }
    
    axios.post(`${baseURL}/addRest`, newRest)
    .then((res) => {
        showRests.innerHTML = ''

        nameInput.value = ''
        imageInput.value = ''
        displayRests(res.data)
    })
}

addButton.addEventListener('click', addRest)

getAllRests()