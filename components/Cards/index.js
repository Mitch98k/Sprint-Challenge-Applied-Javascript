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
function CardList(item) {
    const TopofCard = document.createElement('div');
    const HeadLine = document.createElement('div');
    const Author = document.createElement('div');
    const imgContain = document.createElement('div');
    const imgOfAuthor = document.createElement('img');
    const AuthorName = document.createElement('span');

    TopofCard.classList('card');
    HeadLine.classList('headline');
    Author.classList('author');
    imgContain.classList('img-container')

    TopofCard.appendChild(HeadLine);
    TopofCard.appendChild(Author);
    Author.appendChild(imgContain);
    Author.appendChild(AuthorName);
    imgContain.appendChild(imgOfAuthor);

    return TopofCard;
}
    const theCards = document.querySelector('.cards-container')
axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response);
    for (const theCards in response.data.articles) {
        console.log(`${theCards}: ${response.data.articles[theCards]}`).forEach(item => {
            const newCard = Tab(item);
            theCards.appendChild(newCard);
        });
    }
})
