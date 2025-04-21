const cont = document.getElementById("cont-el");
const renderBtn = document.getElementById("render-btn");
const arr = [];

function createCard(desc, cName, views, monthsOld, imgUrl, duration) {
    if (views > 1000 && views < 1000000) {
        views = `${views / 1000}k • `;
    } else if (views > 1000000 && views < 1000000000) {
        views = `${views / 1000000}M • `
    } else {
        views = `${views / 1000000000}B • `;
    }
    let cardItems = ""
    cardItems += `
        <div class="card">
            <div class="img-info">
            <img src=${imgUrl}
                alt="">
            <span>${duration}</span>
            </div>
            <div class="card-info">
                <p>${desc}</p>
                <span>${cName} ${views}views • ${monthsOld}<span>
            </div>
        </div>
    `;
    arr.push(cardItems)
    console.log(arr);
    for(let i = 0; i < arr.length; i++){
        return cont.innerHTML += arr[i];
    }
}

renderBtn.addEventListener('click', function () {
    return createCard("Installing VS code & how website works | Sigma Web Development Course - Tutorial #1 ", "CodeWithHarry • ", 727000, "2 months ago", "https://i.ytimg.com/vi/V4ohRrvu4Ok/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLCcsn5b1T57HJb8cd8HkVC9RkYwwg" , "31:46");
})
