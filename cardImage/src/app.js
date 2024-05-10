// document.write("Hi there");
let promise = fetch('https://jsonplaceholder.typicode.com/photos')
promise.then(response => {
    // console.log(response.status)
    // console.log(response.ok)
    // console.log(response.headers)
    return response.json();
})
    .then(json => {
        json.forEach(element => {
            displayImages(element);
        });
    })

function displayImages(element) {
    let mainContainer = document.getElementById("main-container");

    let card = document.createElement("div");
    card.classList.add(
        "w-44",
        "grow",
        "rounded",
        "overflow-hidden",
        "shadow-lg"
    )
    // card.innerHTML = "Hi there";

    let img = document.createElement("img");
    img.src = element.url;
    img.classList.add(
        "w-full"
    )
 
    let title = document.createElement("div");
    title.classList.add(
        "px-6",
        "py-4",
        "font-bold",
        "text-xl",
        "mb-2"
    )
    title.innerHTML = element.title;

    card.appendChild(img);
    card.appendChild(title);
    mainContainer.appendChild(card);
}

// displayImages();