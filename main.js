import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";
import PlayerName from "./src/components/PlayerName";


const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    "beforeend",
    `
        ${PlayerName("Playe1")}
        ${PlayerName("Player2")}
        ${BoardGame(6)}
    `
);

console.log(document.getElementById("card-game"))
let $CardGame = document.getElementById("card-game");

/*$CardGame.onclick = function(){
    let imgSrc = $CardGame.setAttribute('src');
    if (imgSrc === "images/alura-pixel.png"){
        $CardGame.setAttribute('src','images/javascrpit-pixel.png');
    }else{
        $CardGame.setAttribute('src','images/alura-pixel.png');
    }
}*/