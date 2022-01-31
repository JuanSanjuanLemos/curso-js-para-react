import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import BoardGame from "./src/objects/BoardGame";
import PlayerScore from "./src/components/PlayerScore";
import CardGame from "./src/components/CardGame";

const $root = document.querySelector('#root');
const $htmlPlayerScore = PlayerScore(1) + PlayerScore(2);
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforebegin",$htmlPlayerScore);
$root.insertAdjacentHTML("beforeend",$htmlBoardGame);

console.log(document.getElementById("card-game"))
let $CardGame = document.getElementById("card-game");

$CardGame.onclick = function(){
    let imgSrc = $CardGame.setAttribute('src');
    if (imgSrc === "images/alura-pixel.png"){
        $CardGame.setAttribute('src','images/javascrpit-pixel.png');
    }else{
        $CardGame.setAttribute('src','images/alura-pixel.png');
    }
}
