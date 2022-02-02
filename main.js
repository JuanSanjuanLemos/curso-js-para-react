import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";
import ScoreBoard from "./src/objects/ScoreBoard";
import BoardGame from "./src/objects/BoardGame";
import ArrowHall from "./src/objects/ArrowHall";

const $root = document.querySelector('#root');

$root.insertAdjacentHTML(
    "beforeend",
    `
        ${ArrowHall(2)}
        ${ScoreBoard()}
        ${BoardGame(6)}
    `
);

