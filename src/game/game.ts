import { GameScore } from "../interfaces";
import Match from "../match/match";
import { Queue } from "queue-typescript";
import Batsman from "../batsman/batsman";
import { validRuns } from "../constants";


export default class Game extends Match {
    private team: string;
    private extras: number;

    constructor(players: number, overs: number, meta: object, teamName: string, extras: number){
        super(players, overs, meta);
        this.team = teamName;
        this.extras = extras;
    }

    public getExtras(): number {
        return this.extras;
    }

    public setExtras(): void {
        this.extras++;
    }

    public getTeamName(): string {
        return this.team;
    }

    public setTeamName(teamName: string): void {
        this.team = teamName;
    }

    public printScoreCard(scoreCard:Batsman[], score: number, wickets: number): void {
        console.log(`Scorecard for ${this.team}:`);
        console.log("Player  Score  4s  6s  Balls");
        let totalBalls = 0;
        for (let i = 0; i < scoreCard.length; i++) {
            const p1: Batsman = scoreCard[i];
            totalBalls += p1.getBallPlayed();
            const pName = p1.isPlaying() ? `${p1.getPlayerName()}*` : `${p1.getPlayerName()}`;
            console.log(`${pName}      ${p1.getRuns()}    ${p1.getFours()}    ${p1.getSixes()}    ${p1.getBallPlayed()}`);
        }

        console.log(`Total: ${score}/${wickets}`);
        console.log(`Overs: ${Math.floor(totalBalls / 6)}.${totalBalls % 6}`);
        console.log(`Extras: ${this.getExtras()}`);
        console.log("\n");
    }

    public MatchInnings(overs: Array<Array<string>>, battingOrder:Array<string>): GameScore {

        const battingQueue = new Queue<Batsman>();
        const scoreCard: Batsman[] = [];
        let score = 0;
        let wickets = 0;
        const numberOfPlayers = super.getPlayers();

        for (let i = 0; i < numberOfPlayers; i++) {

            const p = new Batsman(i, battingOrder[i], 0, 0, 0, 0, false);
            scoreCard.push(p); 
            battingQueue.enqueue(p);
        }

        let p1: Batsman = battingQueue.front;
        battingQueue.dequeue();
        p1.setPlaying(true);
        p1.setStrike();
        let p2: Batsman = battingQueue.front;
        p2.setPlaying(true);
        battingQueue.dequeue();

        for (let i = 0; i < overs.length; i++) {
            const over = overs[i];

            for (let i = 0; i <over.length; i++){

                if(validRuns.includes(over[i])){

                    const runs = parseInt(over[i]);

                    if (p1.isOnStrike()) {
                        p1.setRuns(runs);
                        p1.setBallPlayed();
                    } else if (p2.isOnStrike()) {
                        p2.setRuns(runs);
                        p2.setBallPlayed();
                    }
                    score += runs;

                    if(runs === 3 || runs === 1){
                        p1.setStrike();
                        p2.setStrike();
                    }

                }else if(over[i] === "W"){

                    const strike: Batsman = p1.isOnStrike() ? p1 : p2;
                    wickets += 1;
                    strike.setBallPlayed();
                    strike.setPlaying(false);
                    scoreCard[strike.getPlayerId()] = strike;
                    if(battingQueue.length < 1){
                        strike.getPlayerId() === p1.getPlayerId() 
                        ? scoreCard[p2.getPlayerId()] = p2
                        : scoreCard[p1.getPlayerId()] = p1;

                        this.printScoreCard(scoreCard, score, wickets);

                        return {
                            score: score,
                            wickets: wickets
                        };
                    }else {
                        if (p1.isOnStrike()) {
                            p1 = battingQueue.front;
                            battingQueue.dequeue();
                            p1.setPlaying(true);
                            p1.setStrike();
                        } else if (p2.isOnStrike()) {
                            p2 = battingQueue.front;
                            battingQueue.dequeue();
                            p2.setPlaying(true);
                            p2.setStrike();
                        }
                    }

                } else if(over[i] === "Wd"){
                    score++;
                    this.setExtras();
                } else if (over[i] === "NO") {

                    if (p1.isOnStrike()) {
                        p1.setBallPlayed();
                    } else if (p2.isOnStrike()) {
                        p2.setBallPlayed();
                    }

                    score++;
                    this.setExtras();
                }

                scoreCard[p1.getPlayerId()] = p1;
                scoreCard[p2.getPlayerId()] = p2;
            }

            this.printScoreCard(scoreCard, score, wickets);
            p1.setStrike();
            p2.setStrike();
        }

        return {
            score: score, 
            wickets: wickets
        };
    }

}