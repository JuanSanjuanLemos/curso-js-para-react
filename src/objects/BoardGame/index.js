import "./style.css";
import CardGame from "../../components/CardGame";
import PlayerName from "../../components/PlayerName";

function BoardGame(amountCards){
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);
    return `
    <section class='board-game'>
        ${$htmlContent}
    </section>`;
}

export default BoardGame;
/*<div>
${PlayerScore(1)} ${PlayerScore(2)}
${$htmlContent}
</div>*/