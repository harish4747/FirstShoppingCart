let url = "https://fakestoreapi.com/products";
let parentdiv;
let div;
let img;
let title;
let price;
let rating;
let button;
let details;


let body = document.querySelector("body");

function forDetails(details) {
    details.map((data) => {
        parentdiv = document.getElementById("parentdiv");

        div = document.createElement("div");
        div.classList.add("innerdiv");

        img = document.createElement("img");
        img.src = data.image;
        img.classList.add("images");

        title = document.createElement("p");
        price = document.createElement("p");

        rating = document.createElement("p");

        button = document.createElement("BUTTON");
        button.innerText = "Add to Cart";

        rating.innerHTML = "<b>Rating : </b>" + data.rating.rate;
        title.innerHTML = "<b>Title : </b>" + data.title;
        price.innerHTML = "<b>Price : </b>" + data.price + " Rs";

        div.append(img);
        div.append(title);
        div.append(price);
        div.append(rating);
        div.append(button);

        parentdiv.append(div);

    })

}

// fetching details from api
async function productDetails(url) {
    details = await (await fetch(url)).json();
    console.log(details);
    forDetails(details);
}

productDetails(url);