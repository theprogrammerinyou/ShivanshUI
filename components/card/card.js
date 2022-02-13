const crossImg = document.querySelector(".cross-img");

const card = document.querySelector(".dismiss-card");
const cardActions = document.querySelector(".card-actions-dismiss");

const dismissCard = () => {
    card.classList.add("hide");
    cardActions.classList.add("hide");
}

crossImg.addEventListener("click", dismissCard);