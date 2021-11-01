const request = new XMLHttpRequest();
const url = 'https://tovutidevchallengeapi.azurewebsites.net/products';
request.open("GET", url);
request.send();

request.onload = (e) => {
    console.log(request.response)
    const products = JSON.parse(request.response)
    console.log(request.response.list)
    buildTable(products)

}

function buildTable(data) {
    var table = document.getElementById('product-table')

    for (var i = 0; i < data.length; i++) {
        var row = `<tr>
            <td>${i+1}</td>
            <td>${data[i].name}</td>
            <td>${data[i].brand}</td>
            <td>${data[i].price}</td>
            <td>${data[i].quantity}</td>
            <td>${data[i].attributes}</td>
        </tr>
        `
        table.innerHTML += row
    }
}


// function jsonData() {
//     $.ajax({
//         type: 'GET',
//         url: "https://tovutidevchallengeapi.azurewebsites.net/products",
//         datatype: 'json',
//         success: function(data) {
//             var list = data.list;
//             console.log(list);
//             $.each(list, function(i, item) {
//                 var tr = $('<tr>').append($('<td>').text(item.name));
//                 $("#product-table").append(tr);
//             })
//         }
//     })
// }





// function products() {
//     return fetch('https://tovutidevchallengeapi.azurewebsites.net/products')
//         .then((response) => {
//             console.log(response)
//             return response.json()
//         })
//         .catch((err) => {
//             console.log('Fetch Error :-S', err);
//         })
// }

// const getProducts = async() => {
//     const ret = await products()
//     return ret
// }

// (async function() {
//     const prods = await getProducts()
//     addToTable(prods)
// })



// const rowHtml = row => {
//     html = ''
//     html += `<td>${row.name}</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>`
//     return html
// }

// // fetch('https://tovutidevchallengeapi.azurewebsites.net/products')
// //     .then((response)=>{
// //         let data = response.json();
// //         let tr = '';
// //         let
// //     })