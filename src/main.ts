import Game from "./game/game";
import { GameScore } from "./interfaces";

const driver = () => {
  
    const Innings1 = new Game(5, 2, {}, "Marvel", 0);
    const Innings2 = new Game(5, 2, {}, "DC", 0);

    const Innings1Score: GameScore = Innings1.MatchInnings([["1", "1", "1", "1", "1", "2"], ["W", "4", "4", "Wd", "W", "1", "6"]], ["P1", "P2", "P3", "P4", "P5"]);
    const Innings2Score: GameScore = Innings2.MatchInnings([["4", "6", "W", "W", "1", "1"], ["6", "1", "W", "W"]], ["P6", "P7", "P8", "P9", "P10"]);

    if(Innings1Score.score > Innings2Score.score){
        console.log(`Result: ${Innings1.getTeamName()} won the match by ${Innings1Score.score - Innings2Score.score} runs`);
    }else {
        console.log(`Result: ${Innings2.getTeamName()} won the match by ${Innings2Score.score - Innings1Score.score} runs`);
    }
  
};

driver();