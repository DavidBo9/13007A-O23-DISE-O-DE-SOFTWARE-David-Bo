const likeButton = document.getElementById("likeButton");
let liked = false;

likeButton.addEventListener("click", () => {
    if (liked){
        likeButton.textContent = "Me gusta"
    } else {
        likeButton.textContent = "Quitar me gusta"

    }
    liked = !liked

})

const likeButton2 = document.getElementById("likeButton2");
let liked2 = false;

likeButton2.addEventListener("click", () => {
    if (liked2){
        likeButton2.textContent = "No me gusta"
    } else {
        likeButton2.textContent = "Quitar no me gusta"

    }
    liked2 = !liked2

})
