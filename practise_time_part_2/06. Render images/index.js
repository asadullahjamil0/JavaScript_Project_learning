// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const imagesContainer = document.getElementById("container");

const imgs = [
    "images/hip1.jpg", 
    "images/hip2.jpg",
    "images/hip3.jpg",
    "https://picsum.photos/200"
]

function renderImages(){
    let  listImages = ""
    for(let i = 0; i < imgs.length; i++){
        listImages += `<img class="team-img" src="${imgs[i]}"></>`
    }
    imagesContainer.innerHTML = listImages;
}

renderImages();