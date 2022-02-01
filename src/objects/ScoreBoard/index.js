import "./style.css";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import TextVs from "../../components/TextVS";

function ScoreBoard(){
    return /*html*/`
        <header class=score-board>
            ${PlayerName("Player1")}
            ${PlayerScore()}
            ${TextVs()}
            ${PlayerScore()}
            ${PlayerName("Player2")}
        </header>
    `;
}

export default ScoreBoard;