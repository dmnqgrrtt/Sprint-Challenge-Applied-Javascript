// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards = document.querySelector('.cards-container')


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log('articles', response)

    response.data.articles.javascript.forEach(content => {
        const newCard = createCard(content)
        cards.appendChild(newCard)
    })

    response.data.articles.bootstrap.forEach(content => {
        const newCard = createCard(content)
        cards.appendChild(newCard)
    })

    response.data.articles.technology.forEach(content => {
        const newCard = createCard(content)
        cards.appendChild(newCard)
    })

    response.data.articles.jquery.forEach(content => {
        const newCard = createCard(content)
        cards.appendChild(newCard)
    })

    response.data.articles.node.forEach(content => {
        const newCard = createCard(content)
        cards.appendChild(newCard)
    })
})

const createCard = (topics) => {
    const card = document.createElement('div')
    const headLine = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const image = document.createElement('img')
    const name = document.createElement('div')

    card.appendChild(headLine)
    card.appendChild(author)
    author.appendChild(imgContainer)
    author.appendChild(name)
    imgContainer.appendChild(image)

    card.classList.add('card')
    headLine.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headLine.textContent = topics.headline;
    image.src = topics.authorPhoto;
    name.textContent = `By ${topics.authorName}`;

    return card;

}