import CardGame from "../CardGame";
import "./style.css"

function CardFrontBack(){
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("html","Logo do HTML")}
        </article>
    `;
};

export default CardFrontBack;