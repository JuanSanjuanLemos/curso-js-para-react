import "./style.css";

function ArrowHall(currentPlayer = 1){
    return/*html*/`
        <div class="arrow-hall">
            <img class="img-arrow" src="./images/IconArrow.png" data-currentPlayer="${currentPlayer}" alt="Icone de seta">
        </div>
    `;
}

export default ArrowHall;