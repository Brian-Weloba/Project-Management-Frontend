// const request = new XMLHttpRequest();
// const url = 'https://tovutidevchallengeapi.azurewebsites.net/products';
// request.open("GET", url);
// request.send();

// request.onload = (e) => {
//     console.log(request.response)
//     alert(request.response);
// }

const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
    const inputValue = searchInput.value;
    alert(inputValue);
});